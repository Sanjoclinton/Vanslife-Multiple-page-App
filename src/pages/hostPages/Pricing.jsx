import React from "react";
import { useOutletContext } from "react-router-dom";

const Pricing = () => {
  const currentVan = useOutletContext();
  return (
    <div>
      {currentVan && (
        <p
          style={{
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "21.46px",
            color: "#161616",
            margin: '0'
          }}
        >
          ${currentVan.price}.00
          <span
            style={{
              color: "#4D4D4D",
            }}
          >
            /day
          </span>
        </p>
      )}
    </div>
  );
};

export default Pricing;
