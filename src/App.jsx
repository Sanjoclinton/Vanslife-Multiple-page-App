import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  HomePage,
  Vans,
  VanDetail,
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVansDetail,
  Details,
  Pricing,
  Photos,
  ErrorPage
} from "./pages/import";

import "./server";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      {windowWidth > 700 ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Open on a Mobile device
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<ErrorPage />} />
            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />

            <Route path="/vans">
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetail />} />
            </Route>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />

              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetail />}>
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
