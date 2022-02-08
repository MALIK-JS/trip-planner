import React, { useContext } from "react";
import { dataContext } from "../pages/Dashboard";

function Trips() {
  const data = useContext(dataContext);
  return (
    <div className="card">
      <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
      <div className="card_inner">
        <p className="text-primary-p">Number of trips planned</p>
        <span className="font-bold text-title">{data.length}</span>
      </div>
    </div>
  );
}

export default Trips;
