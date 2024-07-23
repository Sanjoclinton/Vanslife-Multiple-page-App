import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container d-flex flex-column ">
        <h1 className="text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-white mt-4 mb-5">
          Add adventure to your life by joining the #vanlife movement.{" "}
          <br className="d-block" />
          Rent the perfect van to make your perfect road trip
        </p>
        <button className="my-button">
          <Link className="" to="/vans">
            Find your van
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
