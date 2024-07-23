import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ reviewer }) => {
  return (
    <div
      className="review-card"
      style={{
        borderBottom: "1px solid #c7c7c7 ",
        padding: "1.5rem 0",
      }}
    >
      <div className="d-flex gap-2 mb-4">
        {Array(reviewer.stars)
          .fill()
          .map((_, index) => (
            <FaStar
              key={index}
              style={{
                color: "#FF8C38",
                width: "24px",
                height: "24px",
              }}
            />
          ))}
      </div>
      <div className="pb-3">
        <h6>
          {reviewer.name} <span>{reviewer.date}</span>
        </h6>
        <p>{reviewer.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
