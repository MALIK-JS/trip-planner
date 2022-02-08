import React from "react";

function Planning() {
  console.log("MALIK");
  return (
    <div>
      <nav className="navbar">
        <h3 className="text-white">
          YOUR PLANNING FOR THE NEXT TRIP TO ALGERIA <br />
          FROM JUNE 10th to JUNE 30th
        </h3>
        <div className="budget text-white">
          <p>
            BUDGET: <span>3555</span>
          </p>
        </div>
      </nav>
      <main>
        <div className="sub_form">
          <input type="number" placeholder="amount"></input>
          <input type="text" placeholder="e.q Transportation"></input>
          <div className="sub_form_btn">
            <button className="btn"> ADD</button>
            <button className="btn"> clear</button>
          </div>
        </div>
        <div className="expenses">
          <ul>
            <li>TRANSPORTATION AMOUNT</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Planning;
