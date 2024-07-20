import { Link } from "react-router-dom";
import useFetch from "../../constants/useFetch";

const Vans = () => {
  const { data, isPending, error } = useFetch("/api/vans");

  return (
    <div className="container">
      <h1 className="mt-2 fw-bold">Explore our van options</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="row g-3 g-md-5 mb-5">
        {data && data.map((van) => (
          <div key={van.id} className="col-6">
            <Link className="text-decoration-none" to={`/vans/${van.id}`}>
              <img
                src={van.imageUrl}
                alt={van.name}
                className="img-fluid rounded-3"
              />
              <div className="d-flex justify-content-between text-dark">
                <h3 className="fw-bold">{van.name}</h3>
                <p className="d-flex flex-column align-items-end fw-semibold">
                  ${van.price}
                  <span className="fw-normal">/day</span>
                </p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vans;
