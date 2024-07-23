import { Link } from "react-router-dom";
import useFetch from "../../constants/useFetch";

const Vans = () => {
  const { data, isPending, error } = useFetch("/api/vans");

  return (
    <div className="container vans mt-5">
      <h1 className="mt-2">Explore our van options</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="row g-4 g-md-5 mb-5">
        {data && data.map((van) => (
          <div key={van.id} className="col-6">
            <Link className="text-decoration-none" to={`/vans/${van.id}`}>
            <div className="h-100 d-flex flex-column" >
              <img
                src={van.imageUrl}
                alt={van.name}
                className="img-fluid"
              />
              <div className="d-flex justify-content-between gap-2 mt-3">
                <h3 className="fw-bold">{van.name}</h3>
                <div className="d-flex flex-column align-items-end fw-semibold">
                 <h4>${van.price}</h4> 
                  <h5 className="mb-0">/day</h5>
                </div>
              </div>
              <button className={`${van.type} mt-auto`}>{van.type}</button>
              </div>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vans;
