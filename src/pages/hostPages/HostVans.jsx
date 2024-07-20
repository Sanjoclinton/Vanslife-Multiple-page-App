import useFetch from "../../constants/useFetch";
import { Link } from "react-router-dom";

const HostVans = () => {
  const { data, error, isPending } = useFetch("/api/vans");

  return (
    <div className="container">
      <h1>Your listed vans</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        data.map((van) => (
          <Link
            key={van.id}
            to={`/host/vans/${van.id}`}
            className="text-decoration-none text-dark"
          >
            <div className="w-full p-3 bg-white mb-3 rounded-2 ">
              <div className="w-25 d-flex align-items-center gap-3">
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  width={60}
                  className="rounded-1 img-fluid"
                />
                <div className="d-flex flex-column justify-content-between">
                  <p className="mb-0 fw-bold">{van.name}</p>
                  <p className="mb-0">${van.price}/day</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default HostVans;
