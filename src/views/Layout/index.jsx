import React from "react";
import SearchBar from "../../components/SearchBar";
import SideBar from "../../components/SideBar";
import s from "./index.module.scss";

const Layout = ({ children }) => {
 
  return (
    <div className={s.container}>
      <SideBar />
      <SearchBar />
      <div className={s.childrenContainer}>{children}</div>

     {/*  <div className={s.footer}>pwc challenge front-end</div> */}
    </div>
  );
};

export default Layout;
