import Navbar from "./navbar.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Reviewform from "./reviewform.jsx";

const TISSchoolInfo = () => {
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
      id: 2,
    },
    {
      title: "Tema International School",
      logo: "/sch13.jpg",
      proximity: "10km",
      id: 3,
    },
    {
      title: "St. Theresas Catholic Church School",
      logo: "/sch14.webp",
      proximity: "10km",
      id: 4,
    },
    {
      title: "Brentford International Academy",
      logo: "/sch6.jpg",
      proximity: "10km",
      id: 5,
    },
    {
      title: "Liz international Montessori",
      logo: "/sch1.jpg.webp",
      proximity: "10km",
      id: 6,
    },
    {
      title: "The Hilltop International British School",
      logo: "/sh2.jpg",
      proximity: "10km",
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
    <div className="schoolinfo-page">
      <Navbar />
      <div className="schoolinfo-banner-writings3">
        <h1>Tema International School</h1>
        <div className="schoolinfo-reg-buttons">
          <Link to="/signup.jsx">
            <div>Apply for first year</div>
          </Link>
          <Link to="/login.jsx">
            <div>Apply for transfer</div>
          </Link>
        </div>
      </div>
      <div className="schoolinfo-info">
        <div className="info-writings">
          WHO WE ARE <br />
          Tema International School is a private coeducational P-12 school
          situated some two kilometres north of the port city of Tema which lies
          on the Greenwich meridian. The Primary School Campus, located one
          kilometre from the main campus, is a PYP School. The main campus
          offers secondary boarding opportunities in MYP and DP.
          <br />
          <br />
          WHAT WE OFFER <br />
          BIS combines a highly personalised approach to children’s social,
          intellectual, moral and physical development with excellent sporting
          and technological facilities, world class equipment, small class sizes
          and a wide range of co-curricular activities. We offer the British
          National Curriculum for Early Years and the University of Cambridge
          International Examinations for primary and secondary education. We
          prepare learners for examinations including Cambridge Primary
          Checkpoint, Check point for Cambridge Secondary 1, IGCSE, AS and A
          Level.
        </div>
        <div className="info-reg">
          <div className="school-emblem">
            <img src="/sch13.jpg" alt="" />
          </div>
          <div className="info-reg-buttons">
            <Link to="/signup.jsx">
              <div>Apply for first year</div>
            </Link>
            <Link to="/login.jsx">
              <div>Apply for transfer</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="school-tution">
        <div>
          <h1>Tuition</h1>
          <p>
            Tuition is for the highest grade offered and may have changed for
            the current school year. For more information, please contact the
            school.
          </p>
        </div>
        <div>
          <h1>Yearly Tution</h1>
          <h1>GH₵40,950</h1>
        </div>
      </div>
      <div className="school-details">
        <div className="school-address">
          <p>
            Off Tema – Akosombo Rd (Opposite Afariwaa Farms) Accra, Ghana.{" "}
            <br />
            +233 303 30 5134 | +233 303 30 8737 | +233 24 9637 762 |+233 50 3849
            799 <br />
            info@tis.edu.gh
          </p>
        </div>
        <div className="school-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.043837087627!2d-0.020627224723146015!3d5.706806894275073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf806a81869a51%3A0xcf1dee9e01b7b1fc!2sTema%20International%20School!5e0!3m2!1sen!2sgh!4v1693030716800!5m2!1sen!2sgh"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Reviewform />
    </div>
  );
};

export default TISSchoolInfo;
