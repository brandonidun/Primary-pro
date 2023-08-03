import Navbar from "./navbar.jsx";
import { useState } from "react";

const SchoolInfo = () => {
  const [schools, setSchools] = useState([
    { title: "harvard", id: 1 },
    { title: "Princeton", id: 2 },
    { title: "Yale", id: 3 },
    { title: "howard", id: 4 },
    { title: "cambridge", id: 5 },
    { title: "hbcu", id: 6 },
    { title: "nyu", id: 7 },
  ]);
  return (
    <div className="schoolinfo-page">
      <Navbar />
      <div className="schoolinfo-banner-writings">
        <h1>Hillsade College</h1>
        <div className="schoolinfo-reg-buttons">
          <div>Apply for first year</div>
          <div>Apply for transfer</div>
        </div>
      </div>
      <div className="schoolinfo-info">
        <div className="info-writings">
          Founded in 1844, Hillsdale College is a private, residential,
          coeducational, nonsectarian Christian, "Best Value" classical liberal
          arts college of 1,460 students located on a picturesque 400-acre
          campus in southern Michigan. All students enroll in a rigorous,
          structured core curriculum rooted in the enduring truths of the
          Western tradition. More than 100 student organizations, as well as
          athletic teams and fine arts ensembles, contribute to a vibrant
          student life that is animated by an Honor Code committing students to
          the goal of self-government. Graduates leave the College shaped by an
          experience purposed to "develop the minds and improve the hearts."
        </div>
        <div className="info-reg">
          <div className="school-emblem"></div>
          <div className="info-reg-buttons">
            <div>Apply for first year</div>
            <div>Apply for transfer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfo;
