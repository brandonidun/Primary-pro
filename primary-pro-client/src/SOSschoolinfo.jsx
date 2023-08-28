import Navbar from "./navbar.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Reviewform from "./reviewform.jsx";

const SOSSchoolInfo = () => {
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
      <div className="schoolinfo-banner-writings4">
        <h1>American International School</h1>
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
          At American International School, we believe when we stand united, we
          can achieve greatness. Just as the passage from 4:16 states. “From
          him, the whole body, joined and held together by every supporting
          ligament, grows and builds itself up in love; each part does its
          work.” Each of us is a valuable member of the school community. When
          we work in harmony, we strengthen not only ourselves but the school
          community
          <br />
          <br />
          WHAT WE OFFER <br />
          Our school is a melting pot of cultures, talents, and ideas. We
          cherish and celebrate the diversity that enriches our learning
          environment. Let us be open-minded, accepting, and respectful of one
          another's unique backgrounds, perspectives, and abilities. Together,
          we create an inclusive space where everyone feels valued and
          appreciated.
        </div>
        <div className="info-reg">
          <div className="school-emblem">
            <img src="/sch6.jpg" alt="" />
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
          <h1>GH₵45,750</h1>
        </div>
      </div>
      <div className="school-details">
        <div className="school-address">
          <p>
            Elementary Campus No 1 Jungle Road, East Legon, Accra-Ghana. <br />
            (+233)-0302-948761 <br />
            (+233)-28-9547951
            <br />
            info@aisghana.org
          </p>
        </div>
        <div className="school-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5464944699315!2d-0.15445181911738884!3d5.6337486797725775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf84b2ccbda329%3A0x3546acb8b0d31bb6!2sAmerican%20International%20School%20-%20Elementary%20Campus!5e0!3m2!1sen!2sgh!4v1693059492208!5m2!1sen!2sgh"
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

export default SOSSchoolInfo;
