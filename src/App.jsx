import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  About,
  HomePage,
  Vans,
  vansLoader,
  VanDetail,
  vanDetailLoader,
  Dashboard,
  dashboardLoader,
  Income,
  Reviews,
  HostVans,
  hostVansLoader,
  HostVansDetail,
  hostVansDetailLoader,
  Details,
  Pricing,
  Photos,
  ErrorPage,
  Login,
  loginLoader,
  loginAction,
} from "./pages/import";

import "./server";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";

import { requireAuth } from "./constants/utils";
import { authLoader } from "./constants/utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route path="/vans">
        <Route
          index
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />

        <Route
          path=":id"
          element={<VanDetail />}
          loader={vanDetailLoader}
          errorElement={<Error />}
        />
      </Route>

      {/* Host Page */}
      <Route path="host" element={<HostLayout />}>
        {/* Dashboard */}
        <Route
          index
          element={<Dashboard />}
          loader={authLoader(dashboardLoader)}
        />
        {/* Income */}
        <Route
          path="income"
          element={<Income />}
          loader={authLoader(null)}
        />
        {/* Reviews */}
        <Route
          path="reviews"
          element={<Reviews />}
          loader={authLoader(null)}
        />
        {/* Hostvans */}
        <Route
          path="vans"
          element={<HostVans />}
          loader={authLoader(hostVansLoader)}
          errorElement={<Error />}
        />

        {/* HostVans Details */}
        <Route
          path="vans/:id"
          element={<HostVansDetail />}
          loader={authLoader(hostVansDetailLoader)}
          errorElement={<Error />}
        >
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
