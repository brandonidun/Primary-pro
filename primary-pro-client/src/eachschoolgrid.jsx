import { useState } from "react";
import { Link } from "react-router-dom";

const Eachschoolgrid = () => {
  const [schools, setSchools] = useState([
    {
      title: "British International School",
      logo: "/sch9.jpg",
      proximity: "10km",
      link: "/schoolinfo.jsx",
      id: 1,
    },
    {
      title: "Alpha Beta School",
      logo: "/sch15.png",
      proximity: "10km",
      link: "/ABSschoolinfo.jsx",
      id: 2,
    },
    {
      title: "Tema International School",
      logo: "/sch13.jpg",
      proximity: "10km",
      link: "/TISschoolinfo.jsx",
      id: 3,
    },
    {
      title: "Ghana International School",
      logo: "/sch14.webp",
      proximity: "10km",
      link: "/GISschoolinfo.jsx",
      id: 4,
    },
    {
      title: "American International School",
      logo: "/sch6.jpg",
      proximity: "10km",
      link: "/AISschoolinfo.jsx",
      id: 5,
    },

    {
      title: "The Hilltop International British School",
      logo: "/sh2.jpg",
      proximity: "10km",
      link: "/THIBSschoolinfo.jsx",
      id: 6,
    },
    {
      title: "SOS-Hermann Gmeiner International College",
      logo: "/sch1.jpg",
      proximity: "10km",
      link: "SOSschoolinfo.jsx",
      id: 7,
    },
    {
      title: "St. Bernadette Soubirous School",
      logo: "/sch3.jpeg",
      proximity: "10km",
      id: 8,
    },
    {
      title: "Crystal Heights International School",
      logo: "/sch4.png",
      proximity: "10km",
      id: 9,
    },
    {
      title: "Bishop Bowers School",
      logo: "/sch12.jpg",
      proximity: "10km",
      id: 10,
    },
    {
      title: "MAM academy",
      logo: "/sch11.jpg",
      proximity: "10km",
      id: 11,
    },
    {
      title: "GIU International Christian Academy",
      logo: "/sch7.jpg",
      proximity: "10km",
      id: 12,
    },
    {
      title: "Glorious Child School Limited",
      logo: "/sch8.jpg",
      proximity: "10km",
      id: 13,
    },
    {
      title: "The WIT Schools",
      logo: "/sch5.jpg",
      proximity: "10km",
      id: 14,
    },
    {
      title: "Mission International School",
      logo: "/sch10.jpg",
      proximity: "10km",
      id: 15,
    },
  ]);
  return (
    <div className="school-grid-section">
      {schools.map((schools) => (
        <Link to={schools.link}>
          <div className="each-school-grid" key={schools.id}>
            <img id="logo-photo" key={schools.id} src={schools.logo}></img>
            <div className="each-school-grid-name" key={schools.id}>
              <p>{schools.title}</p>
              <p id="location">Accra, Ghana</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Eachschoolgrid;
