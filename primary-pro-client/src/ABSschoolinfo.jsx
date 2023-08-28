import Navbar from "./navbar.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Reviewform from "./reviewform.jsx";

const ABSSchoolInfo = () => {
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
      title: "Christ the King International School",
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
      <div className="schoolinfo-banner-writings2">
        <h1>Alpha Beta School</h1>
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
          Alpha Beta School is a “prepared environment” for learning and
          academic excellence. Our facilities, staff and curriculum provide
          students with all the resources needed to excel. Alpha Beta Education
          Centres helps expose children to a rich and varied teaching and
          learning environment which seeks to broaden their outlook; encourage
          the best examples of Christian morality, and service to others; and to
          develop skills which will enable them to compete favourably and be
          global agents of change.
          <br />
          <br />
          WHAT WE OFFER <br />
          Alpha beta combines a highly personalised approach to children’s
          social, intellectual, moral and physical development with excellent
          sporting and technological facilities, world class equipment, small
          class sizes and a wide range of co-curricular activities. We prepare
          learners for examinations including Cambridge Primary Checkpoint,
          Check point for Cambridge Secondary 1, IGCSE, AS and A Level.
        </div>
        <div className="info-reg">
          <div className="school-emblem">
            <img src="/sch15.png" alt="" />
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
          <h1>GH₵15,750</h1>
        </div>
      </div>
      <div className="school-details">
        <div className="school-address">
          <p>
            3 Dansoman High St, Accra <br />
            (+233)-0302-948761 <br />
            (+233)-0202-532278
            <br />
            info@alphabeta.edu.gh
          </p>
        </div>
        <div className="school-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.117742934303!2d-0.2664844247242411!3d5.5495574944307995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf979d1b171c73%3A0x5db839700b54a9fc!2sAlpha%20Beta%20School!5e0!3m2!1sen!2sgh!4v1693027455332!5m2!1sen!2sgh"
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

export default ABSSchoolInfo;
