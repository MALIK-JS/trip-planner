import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src="assets/logo.png" alt="logo" />
          <h1>Codersbite</h1>
        </div>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="/">Dashboard</Link>
        </div>

        <div className="sidebar__menu">
          <div className="sidebar__link">
            <i className="fa fa-home"></i>
            <Link to="/trips">TRIPS</Link>
          </div>

          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
