import {
  Link,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
} from "react-router-dom";
import { fetchVans } from "../../constants/api";
import { Suspense } from "react";

export function loader() {
  return defer({ vans: fetchVans() });
}

const Vans = () => {
  const loaderData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  let types = ["simple", "rugged", "luxury"];

  function renderVans(loadedData) {
    const displayedVans = typeFilter
      ? loadedData.filter((van) => van.type === typeFilter)
      : loadedData;

    return (
      <>
        <div className="d-flex gap-3 align-items-center my-5">
          <nav className="d-flex align-items-center gap-3 ">
            {types.map((mytype, index) => (
              <button
                key={index}
                onClick={() => setSearchParams({ type: mytype })}
                className={`van-type bg-filter text-dark ${
                  mytype === "simple" && typeFilter === "simple"
                    ? "simple"
                    : mytype === "rugged" && typeFilter === "rugged"
                    ? "rugged"
                    : mytype === "luxury" && typeFilter === "luxury"
                    ? "luxury "
                    : null
                }`}
              >
                {mytype}
              </button>
            ))}
          </nav>
          {typeFilter && (
            <a onClick={() => setSearchParams("")} className="clear">
              Clear filters
            </a>
          )}
        </div>
        <div className="row g-4 g- mb-5">
          {displayedVans.map((van) => (
            <div key={van.id} className="col-6">
              <Link
                className="text-decoration-none"
                to={van.id}
                state={{
                  search: searchParams.toString(),
                  type: typeFilter,
                }}
              >
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
      </>
    );
  }

  return (
    <div className="container vans mt-4">
      <h1 className="mt-2">Explore our van options</h1>
      <Suspense fallback={<h2 className="mt-4">Loading Vans...</h2>}>
        <Await resolve={loaderData.vans}>{renderVans}</Await>
      </Suspense>
    </div>
  );
};

export default Vans;
