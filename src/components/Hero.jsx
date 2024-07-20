import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="text-white fw-bold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-white mt-5">
          Add adventure to your life by joining the #vanlife movement. <br className="d-block"/>Rent the
          perfect van to make your perfect road trip
        </p>
        <Link className="my-button w-100 mt-5" to="/vans">Find your van</Link>
      </div>
    </div>
  );
};

export default Hero;
