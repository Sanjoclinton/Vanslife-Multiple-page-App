import React from "react";
import { FaStar } from "react-icons/fa6";
import useFetch from "../../constants/useFetch";

const Dashboard = () => {
  const { data, isPending, error } = useFetch("/api/vans");
  return (
    <div className="dashboard">
      <div className="container welcome">
        <h2 className="fw-bold">Welcome!</h2>
        <div className="d-flex justify-content-between">
          <p>
            Income last <span>30 days</span>
          </p>
          <h6>Details</h6>
        </div>
        <h2 className="fw-bold">$2,260</h2>
      </div>
      <div
        className="container d-flex align-items-center"
        style={{ background: "#ffddb2", height: "113px" }}
      >
        <div className="review">
          <h3>Review score </h3>
          <div className="d-flex align-items-center gap-2">
            <FaStar
              style={{
                color: "#FF8C38",
                outline: "none",
                width: "26.65px",
                height: "24px",
              }}
            />
            <h6>
              5.0<span>/5</span>
            </h6>
          </div>
          <p className="m">Details</p>
        </div>
      </div>
      <div className="container listed-vans py-4">
        <div className="d-flex justify-content-between mt-2 mb-4">
          <h3 >Your listed vans</h3>
          <h5>View all</h5>
        </div>
        {data &&
          data.slice(0, 3).map((van) => (
            <div
              key={van.id}
              className="d-flex align-items-center bg-white p-3 my-3"
            >
              <img
                src={van.imageUrl}
                width={50}
                alt={van.name}
                className="rounded-1"
              />
              <div className="ms-3">
                <h4 className="mb-0 fw-bold">{van.name}</h4>
                <p className="mb-0">${van.price}/day</p>
              </div>
              <h5 className="ms-auto">Edit</h5>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
