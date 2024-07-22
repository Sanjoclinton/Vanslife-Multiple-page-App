import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ reviewer }) => {
  return (
    <div style={{ borderBottom: "1px solid #c7c7c7 ", padding: "1rem 0", marginTop: '1rem' }}>
      <div className="d-flex gap-2 mb-2">
        {Array(reviewer.stars)
          .fill()
          .map((_, index) => (
            <FaStar
              key={index}
              style={{
                color: "#FF8C38",
                outline: "none",
                marginBottom: "0.5rem",
              }}
            />
          ))}
      </div>
      <p>
        <span className="fw-bold">{reviewer.name} </span>
        {reviewer.date}
      </p>
      <p>{reviewer.review}</p>
    </div>
  );
};

export default ReviewCard;
