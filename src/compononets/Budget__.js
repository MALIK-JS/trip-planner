import React, { useContext } from "react";
import { dataContext } from "../pages/Dashboard";

function Budget() {
  const data = useContext(dataContext);

  const totalBudget = (objc) => {
    let total = 0;
    objc.map((item) => (total += parseInt(item.budget)));
    return total;
  };

  return (
    <div className="card">
      <i className="fa fa-user-o fa-2x text-lightblue" aria-hidden="true"></i>
      <div className="card_inner">
        <p className="text-primary-p">Money Spent</p>
        <span className="font-bold text-title">{totalBudget(data)}</span>
      </div>
    </div>
  );
}

export default Budget;
