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
  SignUp,
  signUpAction,
} from "./pages/import";

// import "./server";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";

import { AuthProvider } from "./contexts/AuthContext";
import { ProtectPages } from "./pages/ProtectPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="signup" element={<SignUp />} action={signUpAction} />
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
      <Route element={<ProtectPages />}>
        <Route path="host" element={<HostLayout />}>
          {/* Dashboard */}
          <Route index element={<Dashboard />} loader={dashboardLoader} />
          {/* Income */}
          <Route path="income" element={<Income />} />
          {/* Reviews */}
          <Route path="reviews" element={<Reviews />} />
          {/* Hostvans */}
          <Route
            path="vans"
            element={<HostVans />}
            loader={hostVansLoader}
            errorElement={<Error />}
          />

          {/* HostVans Details */}
          <Route
            path="vans/:id"
            element={<HostVansDetail />}
            loader={hostVansDetailLoader}
            errorElement={<Error />}
          >
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
