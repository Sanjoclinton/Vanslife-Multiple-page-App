import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  About,
  HomePage,
  Vans, vansLoader,
  VanDetail,
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVansDetail,
  Details,
  Pricing,
  Photos,
  ErrorPage,
  Login
} from "./pages/import";

import "./server";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans">
        <Route index element={<Vans />} loader={vansLoader}  errorElement={<Error />}/>
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

      <Route path="login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
