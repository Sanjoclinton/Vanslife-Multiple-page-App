import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";
import { fetchVans } from "../../constants/asyncFetch";
import { Suspense } from "react";
import { GiH2O } from "react-icons/gi";

export async function loader({ params }) {
  return defer({ van: fetchVans(params.id) });
}

const VanDetail = () => {
  const loaderData = useLoaderData();

  const location = useLocation();
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  function renderVan(van) {
    return (
      <>
        <div className=" d-flex flex-column align-items-stretch my-5 gap-3">
          <div className="w-100">
            <img
              className=" rounded-3 flex-fill w-100"
              src={van.imageUrl}
              alt={van.name}
            />
          </div>

          <div className="w-100 flex-fill">
            <button className={`${van.type}`}>{van.type}</button>
            <h3>{van.name}</h3>
            <h4>
              ${van.price}
              <span>/day</span>
            </h4>

            <p className="mt-3">{van.description}</p>
            <button className="rent">Rent this van</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container van-detail">
      <Link to={`..?${search}`}>
        <div
          style={{
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontWeight: "500",
            fontSize: "15.95px",
            lineHeight: "22.92px",
            color: "#201f1d",
          }}
        >
          <BsArrowLeft style={{ color: "#858585" }} />
          <p className="mb-0">Back to {type} vans</p>
        </div>
      </Link>

      <Suspense fallback={<h2 className="mt-4">Loading Van...</h2>}>
        <Await resolve={loaderData.van}>{renderVan}</Await>
      </Suspense>
    </div>
  );
};

export default VanDetail;
