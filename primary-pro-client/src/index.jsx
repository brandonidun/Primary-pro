import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./login";
import Signup from "./signup";
import Profile from "./profile";
import WhySchool from "./whyschool";
import Roadmap from "./roadmap";
import Fees from "./fees";
import MySchools from "./myschools";
import ProfileSearch from "./profilesearch";
import SchoolGrid from "./schoolgrid";
import SchoolInfo from "./schoolinfo";
import Eachschoolgrid from "./eachschoolgrid";
import ContactSupport from "./contactsupport";
import Mobilenavbar from "./mobilenavbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login.jsx",
    element: <Login />,
  },
  {
    path: "/signup.jsx",
    element: <Signup />,
  },
  {
    path: "/profile.jsx",
    element: <Profile />,
  },
  {
    path: "/whyschool.jsx",
    element: <WhySchool />,
  },
  {
    path: "/roadmap.jsx",
    element: <Roadmap />,
  },
  {
    path: "/fees.jsx",
    element: <Fees />,
  },
  {
    path: "/myschools.jsx",
    element: <MySchools />,
  },
  {
    path: "/profilesearch.jsx",
    element: <ProfileSearch />,
  },
  {
    path: "/schoolgrid.jsx",
    element: <SchoolGrid />,
  },
  {
    path: "/schoolinfo.jsx",
    element: <SchoolInfo />,
  },
  {
    path: "/eachschoolgrid.jsx",
    element: <Eachschoolgrid />,
  },
  {
    path: "/contactsupport.jsx",
    element: <ContactSupport />,
  },
  {
    path: "/mobilenavbar.jsx",
    element: <Mobilenavbar />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
