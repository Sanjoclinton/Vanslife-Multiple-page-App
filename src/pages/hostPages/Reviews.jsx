import React from "react";
import { FaStar } from "react-icons/fa6";
import { reviewers, reviews } from "../../constants";
import ReviewCard from "../../components/ReviewCard";

const Reviews = () => {
  return (
    <>
      <div className="host-reviews container pb-5 mt-5">
        <div className="d-flex align-items-end gap-3 title">
          <h3>Your Reviews</h3>
          <p>
            last <span>30 days</span>
          </p>
        </div>
        <div className=" mt-5 d-flex align-items-center gap-2">
          <h3>5.0 </h3>

          <FaStar
            style={{
              color: "#FF8C38",
              outline: "none",
              width: "26.65px",
              height: "24px",
            }}
          />
          <p>overall rating</p>
        </div>

        <div className="my-5 d-flex flex-column gap-2 ratings">
          {reviews.map((review, index) => (
            <div key={review.id} className="d-flex align-items-center">
              <p style={{ flex: 1.2 }} >{`${review.rating} ${
                review.rating <= 1 ? "star" : "stars"
              }`}</p>
              <div
                style={{
                  backgroundColor: index === 0 ? "#FF8C38" : "#B9B9B9",
                  flex: 4,
                  height: "7px",
                  borderRadius: "8px",
                }}
              />
              <p style={{ flex: 1, display: "flex", justifyContent: "end" }}>
                {review.percentage}%
              </p>
            </div>
          ))}
        </div>
        <div>
          <h4>Reviews (2)</h4>
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
