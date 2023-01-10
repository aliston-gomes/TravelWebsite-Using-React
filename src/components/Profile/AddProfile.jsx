import React, { useState } from "react";
import Styles from "./profile.module.css";
import { db, auth } from "../../apis/firebase";
import {doc,setDoc } from "@firebase/firestore";
import { AuthContext } from "../../apis/AuthContextApi";
import { useContext } from "react";
import { toast } from 'react-toastify';
import profile from './Profile';
const AddProfile = () => {
  let { authUser } = useContext(AuthContext)
  let { uid } = authUser == null ? "" : authUser;
  let [profile,setProfile]=useState("")
  let [state, setState] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    address: "",
    city: "",
    isLoading: false,
  });

  let { firstname, lastname, gender, city, address, isLoading } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
  
    console.log(state);
    try {
       let payload = {
         firstname,
         lastname,
         gender,
         city,
         address,
         city,
       };
      //! COLLECTION PATH (DATABASE LOCATION)
      let userCollectionRef = doc(db, "users",uid);
      let { displayName, photoURL, email, phonenumber } = authUser;

      //! INSERT DOCUMENT INNTO THE COLLECTION
      await setDoc(userCollectionRef, { uid, displayName, photoURL, email, ...payload });
      toast.success("User Information Updated Successfully!")
      window.location.assign("/profile")
      console.log(authUser?.uid);
      //updateProfile(authUser,{
      // ...payload,
      // });

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={Styles.mainProfileBlock}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" onChange={handleChange}>
          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
        </div>
        <div className="form-group">
          <label htmlFor="firstname">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adress</label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="10"
            value={address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default AddProfile;
