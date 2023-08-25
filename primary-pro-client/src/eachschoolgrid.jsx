import { useState } from "react";
import { Link } from "react-router-dom";

const Eachschoolgrid = () => {
  const [schools, setSchools] = useState([
    {
      title: "harvard",
      logo: "/sch11.png",
      proximity: "10km",
      id: 1,
    },
    {
      title: "Princeton",
      logo: "/sch15.png",
      proximity: "10km",
      id: 2,
    },
    {
      title: "Yale",
      logo: "/sch13.png",
      proximity: "10km",
      id: 3,
    },
    {
      title: "howard",
      logo: "/sch14.jpg",
      proximity: "10km",
      id: 4,
    },
    {
      title: "cambridge",
      logo: "/sch5.jpg",
      proximity: "10km",
      id: 5,
    },
    {
      title: "hbcu",
      logo: "/sch1.jpg",
      proximity: "10km",
      id: 6,
    },
    {
      title: "nyu",
      logo: "/sch2.jpg",
      proximity: "10km",
      id: 7,
    },
    {
      title: "nyu",
      logo: "/sch3.webp",
      proximity: "10km",
      id: 8,
    },
    {
      title: "nyu",
      logo: "/sch4.png",
      proximity: "10km",
      id: 9,
    },
    {
      title: "nyu",
      logo: "/sch15.png",
      proximity: "10km",
      id: 10,
    },
    {
      title: "nyu",
      logo: "/sch6.png",
      proximity: "10km",
      id: 11,
    },
    {
      title: "nyu",
      logo: "/sch7.png",
      proximity: "10km",
      id: 12,
    },
    {
      title: "nyu",
      logo: "/sch8.png",
      proximity: "10km",
      id: 13,
    },
    {
      title: "nyu",
      logo: "/sch9.png",
      proximity: "10km",
      id: 14,
    },
    {
      title: "nyu",
      logo: "/sch10.png",
      proximity: "10km",
      id: 15,
    },
  ]);
  return (
    <div className="school-grid-section">
      {schools.map((schools) => (
        <Link to="/schoolinfo.jsx">
          <div className="each-school-grid" key={schools.id}>
            <img id="logo-photo" key={schools.id} src={schools.logo}></img>
            <div className="each-school-grid-name" key={schools.id}>
              <p>{schools.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Eachschoolgrid;
