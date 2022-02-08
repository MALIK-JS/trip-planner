import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ id, value }) {
  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <h1>TRIP PLANNER</h1>
      </div>

      <div className="sidebar__menu">
        <div
          className={id ? "sidebar__link" : "sidebar__link active_menu_link"}
        >
          <Link to="/">Dashboard</Link>
        </div>

        <div className="sidebar__menu">
          <div className={id ? "sidebar__link active_menu_link" : "sidebar__link"}>
            <Link to="/trips">TRIPS</Link>
          </div>

          <div className="sidebar__logout">
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
