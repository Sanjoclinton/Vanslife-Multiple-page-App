import React from "react";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const currentVan = useOutletContext();
  return (
    <div className="container mb-5">
      {currentVan && (
        <div className=" bg-white p-3">
          <p className="mb-2"><span className="fw-bold">Name:</span> {currentVan.name}</p>
          <p className="mb-2"><span className="fw-bold">Category:</span> {currentVan.type}</p>
          <p className="mb-2"><span className="fw-bold">Description:</span> {currentVan.description}</p>
          <p className="mb-2"><span className="fw-bold">Visibility:</span> public</p>
        </div>
      )}
    </div>
  );
};

export default Details;
