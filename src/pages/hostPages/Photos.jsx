import React from "react";
import { useOutletContext } from "react-router-dom";

const Photos = () => {
  const currentVan = useOutletContext();
  return (
    <div>
      <img
        src={currentVan.imageUrl}
        alt={currentVan.name}
        style={{
          width: "103px",
          height: "101.56px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default Photos;
