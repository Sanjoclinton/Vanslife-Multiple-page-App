import React from "react";
import { FaStar } from "react-icons/fa6";
import { reviewers, reviews } from "../../constants";
import ReviewCard from "../../components/ReviewCard";

const Reviews = () => {
  return (
    <>
      <div className="container pb-5">
        <div className="d-flex align-items-end gap-3">
          <h2 className="fw-bold mb-0">Your Reviews</h2>
          <p className="mb-0">
            last{" "}
            <span className="fw-semibold text-decoration-underline link-offset-2 opacity-75">
              30 days
            </span>
          </p>
        </div>
        <div className="mb-0 mt-3 d-flex align-items-center gap-1">
          <span className="fw-bold fs-2">5.0 </span>

          <FaStar style={{ color: "#FF8C38", outline: "none" }} />

          <span className="fw-bold opacity-75">overall rating</span>
        </div>
        <div className="my-5 d-flex flex-column gap-2">
          {reviews.map((review, index) => (
            <div key={review.id} className="d-flex align-items-center">
              <p style={{ flex: 1.2 }} className="mb-0">{`${review.rating} ${
                review.rating <= 1 ? "star" : "stars"
              }`}</p>
              <div
                style={{
                  backgroundColor: index === 0 ? "#FF8C38" : "#B9B9B9",
                  flex: 4,
                  height: "7px",
                  borderRadius: '10px'
                }}
              />
              <div style={{ flex: 1, display: "flex", justifyContent: "end" }}>
                {review.percentage}%
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="fw-bold">Reviews (2)</p>
          <div>
            {reviewers.map((reviewer, index) => (
              <ReviewCard key={reviewer.id} reviewer={reviewer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
