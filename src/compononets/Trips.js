import React, { useEffect } from "react";

function Trips({
  id,
  from,
  to,
  godate,
  backdate,
  budget,
  destfalg,
  language,
  handleDeleteTrip,
  handleEditTrip,
}) {
  return (
    <article className="trip">
      <div className="destination">
        <p>YOUR TRIP TO: </p>
        <h3>{to}</h3>
      </div>
      <img className="trip__img" src={destfalg} />
      <div className="trip__data">
        <p className="trip__row">
          <span></span>
          {`FROM :${godate} TO:${backdate}`}
        </p>
        <p className="trip__row">
          The place that you're going to they speak {language}
        </p>
        <p className="trip__row">
          <span>💰</span>
          {budget}/LEFT
        </p>
      </div>
      <div className="trip__management">
        <button className="btn btn__trip" onClick={() => handleEditTrip(id)}>
          EDIT
        </button>
        <button
          className="btn btn__trip"
          onClick={() => {
            handleDeleteTrip(id);
          }}
        >
          DELETE
        </button>
        <button className="btn btn__info">PLANNING</button>
      </div>
    </article>
  );
}

export default Trips;
