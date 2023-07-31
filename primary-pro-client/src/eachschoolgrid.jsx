import { useState } from "react";
const Eachschoolgrid = () => {
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
    <div className="school-grid-section">
      <div className="each-school-grid" key={schools.id}>
        <div className="each-school-grid-photo"></div>
        <div className="each-school-grid-name" key={schools.id}>
          <p>{schools.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Eachschoolgrid;
