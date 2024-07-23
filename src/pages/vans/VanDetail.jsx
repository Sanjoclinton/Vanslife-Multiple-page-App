import { Link, useParams } from "react-router-dom";
import useFetch from "../../constants/useFetch";
import { BsArrowLeft } from "react-icons/bs";

const VanDetail = () => {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(`/api/vans/${id}`);

  return (
    <div className="container van-detail">
      <Link to="..">
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
          <BsArrowLeft style={{color: '#858585'}} />
          <p className="mb-0">Back to all vans</p>
        </div>
      </Link>

      {data && (
        <div className=" d-flex flex-column align-items-stretch my-5 gap-3">
          <div className="w-100">
            <img
              className=" rounded-3 flex-fill w-100"
              src={data.imageUrl}
              alt={data.name}
            />
          </div>

          <div className="w-100 flex-fill">
            <button className={`${data.type}`}>
              {data.type}
            </button>
            <h3 >{data.name}</h3>
              <h4>${data.price}<span>/day</span></h4>
      
            <p className="mt-3">{data.description}</p>
            <button
              className='rent'
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
