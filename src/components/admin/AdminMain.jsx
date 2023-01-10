import React from "react";
import { Outlet } from "react-router-dom";
import ListOfUsers from "./ListOfUsers";
import Styles from "./_admin.module.css";

const AdminMain = () => {
  return (
    <aside className={Styles.adminMain}>
      <aside className={Styles.users}>
        <Outlet />
      </aside>
    </aside>
  );
};

export default AdminMain;
