import useFetch from "../../constants/useFetch";
import { Link } from "react-router-dom";

const HostVans = () => {
  const { data, error, isPending } = useFetch("/api/vans");

  return (
    <div className="container mt-4 ">
      <h1
        style={{
          fontSize: "32px",
          fontWeight: " 700",
          lineHeight: "33.65px",
          color: "#161616",
          marginBottom: "2rem",
        }}
      >
        Your listed vans
      </h1>
      {isPending && <h2 className="fw-bold fs-2">Loading...</h2>}
      {error && <p>{error}</p>}
      {data &&
        data.slice(0, 3).map((van) => (
          <Link
            key={van.id}
            to={`/host/vans/${van.id}`}
            className="text-decoration-none text-dark"
          >
            <div className="d-flex flex-column w-full p-3 bg-white mb-3 rounded-2 ">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  width={65.88}
                  height={65.88}
                  style={{ borderRadius: "5px" }}
                  className="img-fluid"
                />
                <div className="w-full d-flex flex-fill flex-column justify-content-between">
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      lineHeight: "31.66px",
                      marginBottom: "0",
                      color: "#161616",
                    }}
                  >
                    {van.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "31.66px",
                      color: "#4d4d4d",
                    }}
                    className="mb-0"
                  >
                    ${van.price}/day
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default HostVans;
