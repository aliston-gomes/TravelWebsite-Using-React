import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiHotelLine } from "react-icons/ri";
import Styles from "./_admin.module.css";
const AdminSidebar = () => {
  return (
    <aside className={Styles.adminSidebar}>
      <nav>
        <Link to="/admin/dashboard" className="active">
          <span className={Styles.icons}>
            <AiOutlineDashboard />
          </span>
          <span className={Styles.content}>Dashboard</span>
        </Link>
      </nav>
      <main>
        <Link to="/admin/add-hotel" className="active">
          <span className={Styles.icons}>
            <RiHotelLine />
          </span>
          <span className={Styles.content}>Dashboard</span>
        </Link>
      </main>
      <footer></footer>
    </aside>
  );
};

export default AdminSidebar;
