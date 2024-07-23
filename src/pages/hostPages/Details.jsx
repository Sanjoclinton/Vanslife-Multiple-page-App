import React from "react";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const currentVan = useOutletContext();
  return (
    <div className="details">
      {currentVan && (
        <div>
          <p className="info">
            Name:<span> {currentVan.name}</span>
          </p>
          <p className="info">
            Category:<span className="text-capitalize"> {currentVan.type}</span>
          </p>
          <p className="info">
            Description:<span> {currentVan.description}</span>
          </p>
          <p className="info m-0">
            Visibility:<span> Public</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Details;
