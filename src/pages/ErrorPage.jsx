import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="bg-404">
        <h1 className="fw-bold">
          Sorry, the page you were looking for was not found.
        </h1>
        <Link to="/">
          <button className="w-100 px-2 py-3 rounded-2 border-0 bg-dark text-404 my-4 fw-semibold">
            Return to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
