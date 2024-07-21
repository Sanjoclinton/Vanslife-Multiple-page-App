import React from "react";
import { FaStar } from "react-icons/fa6";
import useFetch from "../../constants/useFetch";

const Dashboard = () => {
  const { data, isPending, error } = useFetch("/api/vans");
  return (
    <div className="dashboard">
      <div className="container dashboard-welcome py-4">
        <h2 className="fw-bold">Welcome!</h2>
        <div className="d-flex justify-content-between">
          <p>
            Income last{" "}
            <span className="fw-semibold text-decoration-underline link-offset-2">
              30 days
            </span>
          </p>
          <p>Details</p>
        </div>
        <h2 className="fw-bold">$2,260</h2>
      </div>
      <div className="container py-4 dashboard-review">
        <div className="d-flex justify-content-between ">
          <p className="mb-0">
            <span className="fw-bold">Review score </span>
            <span>
              <FaStar style={{ color: "#FF8C38", outline: "none" }} />
            </span>
            <span className="fw-bold"> 5.0</span>/5
          </p>
          <p className="mb-0">Details</p>
        </div>
      </div>
      <div className="container  py-4">
        <div className="d-flex justify-content-between">
          <h3 className="fw-bold">Your listed vans</h3>
          <p>View all</p>
        </div>
        {data &&
          data.slice(0,3).map((van, index) => (
            <div key={van.id} className="d-flex align-items-center bg-white p-3 my-3">
              <img src={van.imageUrl} width={50} alt={van.name} className="rounded-1" />
              <div className="ms-3">
                <p className="mb-0 fw-bold">{van.name}</p>
                <p className="mb-0">${van.price}/day</p>
              </div>
              <p className="ms-auto">Edit</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
