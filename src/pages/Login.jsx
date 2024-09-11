import React, { useState } from "react";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    enail: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container py-4 text-center d-flex flex-column gap-4 ">
      <h1 className="w-100 fw-bold">Sign in to your account</h1>

      <form action="" className="w-100" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className="w-100 p-3 rounded border"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-100 p-3 rounded border"
        />
        <button
          className="p-3 text-white rounded border-0 w-100 mt-4 fw-semibold" style={{background: "#ff8c38"}}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
