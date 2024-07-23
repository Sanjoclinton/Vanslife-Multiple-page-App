import React from "react";
import about from "../assets/about-hero.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div>
        <img src={about} alt="about hero" />
      </div>
      <div className="container py-5">
        <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
        <p className="mt-3">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure travel
          plans can go off without a hitch <br />
          (Hitch cost extra 😉)
        </p>

        <p className="mt-3">
          Our team us full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels
        </p>

        <div className="mt-5 explore-container ">
          <h5>
            Your destination is waiting. <br /> Your van is ready.
          </h5>
          <button className="mt-3">
          <Link to="/vans">
            Explore our vans
          </Link>
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default About;
