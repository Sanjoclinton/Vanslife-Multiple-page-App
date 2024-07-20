import { FaArrowLeft } from "react-icons/fa6";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import useFetch from "../../constants/useFetch";

import { hostVansLinks } from "../../constants";
import { TbEdit } from "react-icons/tb";

const HostVansDetail = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(`/api/vans/${id}`);

  return (
    <>
      <div className="container ">
        <div>
          <Link
            to=".."
            relative="path"
            className="text-dark text-decoration-none fw-semibold"
          >
            <FaArrowLeft /> Back to all vans
          </Link>
          {isPending && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {data && (
            <div className=" bg-white p-3 mt-5">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={data.imageUrl}
                  alt={data.name}
                  width={100}
                  className="rounded-0 img-fluid"
                />
                <div className="d-flex flex-column align-items-start justify-content-between">
                  <button
                    className={`border-0 outline-0 text-white px-3 rounded-1 mb-2 ${data.type}`}
                  >
                    {data.type}
                  </button>
                  <p className="mb-0 fw-bold">{data.name}</p>
                  <p className="mb-0 fw-bold">
                    ${data.price}
                    <span className="fw-medium">/day</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="d-flex bg-white p-3">
          {hostVansLinks.map((link, index) => (
            <NavLink
              key={link.id}
              to={link.to}
              end
              className={({ isActive }) =>
                `text-dark ${
                  index !== hostVansLinks.length - 1 && "me-3 me-md-5"
                } ${!isActive && "text-decoration-none"} `
              }
            >
              {link.title}
            </NavLink>
          ))}
          <div>
            <TbEdit className="ms-3 ms-md-5" />
          </div>
        </div>
      </div>
      <Outlet context={data} />
    </>
  );
};

export default HostVansDetail;
