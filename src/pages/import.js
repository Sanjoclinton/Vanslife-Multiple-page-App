import About from "./About";
import HomePage from "./HomePage";
import Vans, { loader as vansLoader } from "./vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./vans/VanDetail";
import Reviews from "./hostPages/Reviews";
import Dashboard, { loader as dashboardLoader } from "./hostPages/Dashboard";
import Income from "./hostPages/Income";
import HostVans, { loader as hostVansLoader } from "./hostPages/HostVans";
import HostVansDetail, {
  loader as hostVansDetailLoader,
} from "./hostPages/HostVansDetail";
import Details from "./hostPages/Details";
import Pricing from "./hostPages/Pricing";
import Photos from "./hostPages/Photos";
import ErrorPage from "./ErrorPage";
import Login, { loader as loginLoader, action as loginAction } from "./Login";

export {
  About,
  HomePage,
  Vans,
  vansLoader,
  VanDetail,
  vanDetailLoader,
  Reviews,
  Dashboard,
  dashboardLoader,
  Income,
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
};
