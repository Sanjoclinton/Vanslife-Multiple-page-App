import { Link, NavLink, useSearchParams } from "react-router-dom";
import useFetch from "../../constants/useFetch";
import { useEffect, useState } from "react";

const Vans = () => {
  const { data, isPending, error } = useFetch("/api/vans");

  const [searchParams, setSearchParams] = useSearchParams();
  const [myData, setMyData] = useState(data);

  let types = [];
  data &&
    data.forEach((van) => {
      !types.includes(van.type) && types.push(van.type);
    });

  useEffect(() => {
    
    const typeFilter = searchParams.get("type");
    
    setMyData(
      typeFilter ? data && data.filter((van) => van.type === typeFilter) : data
    );
  }, [searchParams, data]);

  return (
    <div className="container vans mt-4">
      <h1 className="mt-2">Explore our van options</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="d-flex gap-3 align-items-center my-5">
        <nav className="d-flex align-items-center gap-3 ">
          {types.map((mytype, index) => (
            <button
              key={index}
              // to={`?type=${type}`}
              onClick={() => setSearchParams({ type: mytype  })}
              className={`van-type bg-filter text-dark hov-${mytype}`}
              
            >
              {mytype}
            </button>
          ))}
        </nav>
        <a onClick={() => setSearchParams("")} className="clear">
          Clear filters
        </a>
      </div>
      <div className="row g-4 g- mb-5">
        {myData &&
          myData.map((van) => (
            <div key={van.id} className="col-6">
              <Link className="text-decoration-none" to={`/vans/${van.id}`}>
                <div className="h-100 d-flex flex-column">
                  <img
                    src={van.imageUrl}
                    alt={van.name}
                    className="img-fluid"
                  />
                  <div className="d-flex justify-content-between gap-2 mt-3">
                    <h3>{van.name}</h3>
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
