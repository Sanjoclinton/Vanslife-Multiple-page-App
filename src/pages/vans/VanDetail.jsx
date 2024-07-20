import { Link, useParams } from "react-router-dom";
import useFetch from "../../constants/useFetch";
import { FaArrowLeftLong } from "react-icons/fa6";


const VanDetail = () => {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(`/api/vans/${id}`);

  return (
    <div className="container">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Link to=".."><FaArrowLeftLong className="text-dark mb-3 "  /></Link>
      {data && (
        <div className=" d-flex flex-column flex-md-row align-items-start mb-5 gap-3">
          <div className="w-100">
            <img
              className=" rounded-3 flex-fill w-100"
              src={data.imageUrl}
              alt={data.name}
            />
          </div>

          <div className="w-100 flex-fill">
            <button className={`van-type ${data.type} selected`}>
              {data.type}
            </button>
            <h3 className="fw-bold mt-3">{data.name}</h3>
            <p className="d-flex fs-4 mt-2 fw-semibold">
              ${data.price}
              <span className="fw-normal">/day</span>
            </p>
            <p>{data.description}</p>
            <button
              className={`border-0  ${data.type} py-2 px-5 rounded-2 text-white fw-semibold`}
            >
              Rent this van
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VanDetail;
