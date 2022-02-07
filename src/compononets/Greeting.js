import React from "react";
import hello from "../assets/hello.svg";

export default function Greeting() {
  return (
    <div className="main__title">
      <img src={hello} alt="" />
      <div className="main__greeting">
        <h1>Hello username</h1>
        <p>Welcome to your Trip Planner</p>
      </div>
    </div>
  );
}
