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
import ABSSchoolInfo from "./ABSschoolinfo";
import TISSchoolInfo from "./TISschoolinfo";
import GISSchoolInfo from "./GISschoolinfo";
import SOSSchoolInfo from "./SOSschoolinfo";
import AISSchoolInfo from "./AISschoolinfo";
import THIBSSchoolInfo from "./THIBSschoolinfo";
import Eachschoolgrid from "./eachschoolgrid";
import ContactSupport from "./contactsupport";
import Mobilenavbar from "./mobilenavbar";
import Reviewform from "./reviewform";
import ScrollToTop from "./scrolltotop";

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
    path: "/ABSschoolinfo.jsx",
    element: <ABSSchoolInfo />,
  },
  {
    path: "/TISschoolinfo.jsx",
    element: <TISSchoolInfo />,
  },
  {
    path: "/GISschoolinfo.jsx",
    element: <GISSchoolInfo />,
  },
  {
    path: "/THIBSschoolinfo.jsx",
    element: <THIBSSchoolInfo />,
  },
  {
    path: "/AISschoolinfo.jsx",
    element: <AISSchoolInfo />,
  },
  {
    path: "/SOSschoolinfo.jsx",
    element: <SOSSchoolInfo />,
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
  {
    path: "/reviewform.jsx",
    element: <Reviewform />,
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
