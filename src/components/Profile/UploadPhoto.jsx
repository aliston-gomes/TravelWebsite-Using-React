import React from "react";
import { useState } from "react";
import Styles from "./profile.module.css";
import { storage } from "../../apis/firebase";
import { updateProfile } from "firebase/auth";
import {
  ref as photoRef,
  getDownloadURL,
  uploadBytesResumable,
} from "@firebase/storage";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../apis/AuthContextApi";

const UploadPhoto = () => {
  let { authUser } = useContext(AuthContext);
  let [photo, setPhoto] = useState("");
  let [photoView, setPhotoView] = useState(null);
  let [loading, setLoading] = useState(false);
  let [progress, setProgressBar] = useState(0);
  let [statusBar, setStatusBar] = useState(false);
  let [isLoading, isSetLoading] = useState(false);

  let handleChange = e => {
    let files = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onloadend = function (e) {
      setPhotoView(e.target.result);
    };
    setPhoto(files);
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      // SET STORAGE LOCATION
      let storageLocation = photoRef(storage, "profile-photo/" + photo.name);
      let uploadImageTask = uploadBytesResumable(storageLocation, photo);
      // FIREBASE EVENTS
      uploadImageTask.on(
        "state_changed",
        snapShot => {
          //PROGRESSBAR
          let ProgressBarData =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setProgressBar(ProgressBarData);
          setStatusBar(true);
          setLoading(true);
          setPhotoView(null);
        },
        err => {
          //ERROR HANDLING
          toast.error(err.code);
        },
        async () => {
          //TASK COMPLETION
          let DownloadURL = await getDownloadURL(storageLocation);
          updateProfile(authUser, {
            photoURL: DownloadURL,
          });
          setLoading(false);
          setStatusBar(false);
          toast.success("Profil Photo Updated SuccessFully");
          window.location.assign("/profile");
        }
      );
    } catch (error) {
      toast.error(error.code);
    }
  };
  let ProgressUI = () => {
    return (
      <div className={Styles.progress}>
        <p className="bar" style={{ width: "99%" }}>
          {`{parseInt({progress})%}`}
        </p>
      </div>
    );
  };

  console.log(photoView);
  return (
    <section className={Styles.profilePhotoBlock}>
      <h1>Upload Profile Photo</h1>
      <article>
        {statusBar == true ? <ProgressUI /> : ""}
        <figure>
          {photoView == null ? "" : <img src={photoView} alt="photoview" />}
        </figure>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="uploadPhoto">Upload Photo</label>
            <input
              type="file"
              name="uploadPhoto"
              id="uploadPhoto"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button>upload</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UploadPhoto;
