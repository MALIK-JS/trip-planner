import React from "react";

function Trips() {
  return (
    <div className="card">
      <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
      <div className="card_inner">
        <p className="text-primary-p">Number of Trips Planned</p>
        <span className="font-bold text-title">2467</span>
      </div>
    </div>
  );
}

export default Trips;
