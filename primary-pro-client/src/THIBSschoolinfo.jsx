import Navbar from "./navbar.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Reviewform from "./reviewform.jsx";

const THIBSSchoolInfo = () => {
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
      <div className="schoolinfo-banner-writings7">
        <h1>The Hilltop International British School</h1>
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
          A child’s education is the most important legacy a parent can bequeath
          to his or her ward. At The Hilltop International British School
          (HIBS), we strive to make your child’s education the most important
          legacy and investment for him or her. We invite you as a parent or
          guardian to work with the Board, Management and our teachers to
          fulfill our great mission of providing excellence in education with
          moral values. It is therefore our hope that we all work together to
          ensure that the aspirations of THE STARS of HIBS are fulfilled.
          <br />
          <br />
          WHAT WE OFFER <br />
          Accredited by Cambridge Assessment International Education in
          September 2010, The Hilltop International British School (HIBS),
          formerly The Hilltop International Science College offers to students
          the opportunity to sit for the prestigious International Graduate
          Certificate of Secondary Education (IGCSE) and the Advanced (A) level.
          HIBS is part of The Hilltop School and a member of the PSGN of the
          British Council.
        </div>
        <div className="info-reg">
          <div className="school-emblem">
            <img src="/sh2.jpg" alt="" />
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
          <h1>GH₵16,750</h1>
        </div>
      </div>
      <div className="school-details">
        <div className="school-address">
          <p>
            Elementary Campus No 1 Jungle Road, East Legon, Accra-Ghana. <br />
            (+233)-0302-948761 <br />
            (+233)-28-9547951
            <br />
            info@gisghana.org
          </p>
        </div>
        <div className="school-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15852.291263785357!2d-1.615572!3d6.6378796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb916af6f6d5d9%3A0x6564d263b14b127a!2sThe%20Hilltop%20International%20British%20School%20of%20Kumasi!5e0!3m2!1sen!2sgh!4v1693183542938!5m2!1sen!2sgh"
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

export default THIBSSchoolInfo;
