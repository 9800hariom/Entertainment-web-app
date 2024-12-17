import React from "react";
import {  FaTv, FaBookmark } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import { MdWindow } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar ">
     <nav>
    <div className="logo h-1"><MdMovieCreation /></div>
   
      <ul>
        <li><MdWindow /></li>
       <Link to="/tvserial"><li><MdLocalMovies /></li></Link> 
        <Link to="/movie"><li><FaTv /> </li></Link>
        <li><FaBookmark /></li>
      </ul>
    </nav>
    <div className="profile">👤
      <img src="" alt="" />
    </div>
  </div>
);

export default Sidebar;
