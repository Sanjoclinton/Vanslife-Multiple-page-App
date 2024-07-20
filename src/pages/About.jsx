import React from "react";
import about from "../assets/about-hero.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-100 h-auto">
      <div>
        <img className="about-img" src={about} alt="about hero" />
      </div>
      <div className="container py-5">
        <h2 className=" fw-bold">
          Don't squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="mt-3 fw-medium">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure travel
          plans can go off without a hitch <br />
          (Hitch cost extra 😞)
        </p>

        <p className="mt-3 fw-medium ">
          Our team us full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels
        </p>

        <div className="mt-5 explore ">
          <h5 className="fw-bold">
            Your destination is waiting. <br /> Your van is ready.
          </h5>
          <Link className="explore-btn" to="/vans">Explore our vans</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
