import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import useFetch from "../../constants/useFetch";

import { hostVansLinks } from "../../constants";
import { BsArrowLeft } from "react-icons/bs";

const HostVansDetail = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(`/api/vans/${id}`);

  return (
    <>
      <div className="container mb-5">
        <Link to=".." relative="path">
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
              marginTop: "2rem",
            }}
          >
            <BsArrowLeft style={{ color: "#858585" }} />
            <p className="mb-0">Back to all vans</p>
          </div>
        </Link>

        {data && (
          <div
            style={{
              background: "#ffffff",
              padding: "1.5rem",
              borderRadius: "6px",
              marginTop: "2rem",
            }}
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={data.imageUrl}
                alt={data.name}
                style={{
                  width: "160.15px",
                  height: "157.9px",
                  radius: "5px",
                }}
              />
              <div className="d-flex flex-column">
                <button className={`${data.type} van-type`}>{data.type}</button>
                <h3
                  style={{
                    fontSize: "26.06px",
                    fontWeight: "700",
                    lineHeight: "27.4px",
                    marginTop: "1rem",
                  }}
                >
                  {data.name}
                </h3>
                <p
                  style={{
                    fontSize: "19.54px",
                    fontWeight: "700",
                    lineHeight: "35.95px",
                    margin: "0",
                  }}
                >
                  ${data.price}
                  <span
                    style={{
                      fontSize: "16.29px",
                      fontWeight: "500",
                      lineHeight: " 35.95px",
                    }}
                  >
                    /day
                  </span>
                </p>
              </div>
            </div>

            <nav className="my-4 d-flex gap-4">
              {hostVansLinks.map((link, index) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  end={index === 0}
                  
                  className={({ isActive }) => (isActive ? "active" : null)}
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>

            <Outlet context={data} />
          </div>
        )}
      </div>
    </>
  );
};

export default HostVansDetail;
