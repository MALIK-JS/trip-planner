import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ id, triggerLogout }) {
 
  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <h1>TRIP PLANNER</h1>
      </div>

      <div className="sidebar__menu">
        <div
          className={id ? "sidebar__link" : "sidebar__link active_menu_link"}
        >
          <Link to="/">DASHBOARD</Link>
        </div>

        <div
          className={id ? "sidebar__link active_menu_link" : "sidebar__link"}
        >
          <Link to="/trips">TRIPS</Link>
        </div>
      </div>
      <div className="sidebar__logout">
        <button className="btn btn__logout" onClick={triggerLogout}>
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
