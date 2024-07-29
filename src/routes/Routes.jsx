import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivetRoute from "./PrivetRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      {
        path: "/add-job",
        element: (
          <PrivetRoute>
            <AddJob />
          </PrivetRoute>
        ),
      },
      { path: "/register", element: <Register /> },
      {
        path: "/my-posted-jobs",
        element: (
          <PrivetRoute>
            <MyPostedJobs />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-bids",
        element: (
          <PrivetRoute>
            <MyBids />
          </PrivetRoute>
        ),
      },
      {
        path: "/bid-requests",
        element: (
          <PrivetRoute>
            <BidRequests />
          </PrivetRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <PrivetRoute>
            <JobDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpdateJob />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
    ],
  },
]);

export default router;
