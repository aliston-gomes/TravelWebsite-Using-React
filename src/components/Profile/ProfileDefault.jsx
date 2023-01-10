import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AuthContext } from "../../apis/AuthContextApi";
import Spinner from "../../pages/Spinner";
import Styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { db } from "../../apis/firebase";
import { doc, getDoc, onSnapshot } from "@firebase/firestore";

const ProfileDefault = () => {
  let { authUser } = useContext(AuthContext);
  let [profile, setProfile] = useState("");
  let { uid } = authUser === null ? "" : authUser;

  let fetchData = async () => {
    onSnapshot(doc(db, "users", uid), doc => {
      setProfile(doc.data());
    });
    let profileData = await getDoc(useRef);
    console.log(profileData);
    setProfile(profileData?.data());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={Styles.mainProfileBlock}>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>Profile</h1>
          <article>
            <aside className={Styles.asideIcon}>
              <Link to="/profile/upload-profile-photo">
                <figure>
                  <img src={authUser.photoURL} alt={authUser.displayName} />
                </figure>
                <main>
                  <span className={Styles.cameraIcon}>
                    <FaCamera />
                  </span>
                </main>
              </Link>
            </aside>
            <footer>
              {/* <h1>{authUser.displayName}</h1> */}
              {/* <h4>{authUser.email}</h4> */}
            </footer>
            <aside className={Styles.profileUser}>
              <section id={Styles.userInfo}>
                <p>{`Name :${profile.firstname} ${profile.lastname}`}</p>
                <p>{`Gender :${profile.gender}`}</p>
                <p>{`City : ${profile.city}`}</p>
                <p>{`Address :${profile.address}`}</p>
              </section>
            </aside>
          </article>
        </Fragment>
      )}
    </div>
  );
};

export default ProfileDefault;
