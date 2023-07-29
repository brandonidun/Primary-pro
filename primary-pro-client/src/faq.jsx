import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="faq-banner">
      <div className="faq-header">
        <div className="header-writings">
          <h1>Plan Your Future</h1>
          <p>
            Get connected with everything you need to apply to college, research
            financial aid and scholarships, and get advice from counselors,
            advisors and mentors.
          </p>
        </div>
        <div className="header-svgs"></div>
      </div>
      <div className="faq-cards">
        <div className="why-school">
          <div className="why-school-svg"></div>
          <h1>WHY SCHOOL MATTERS</h1>
          <p>School is worth it. Your future is worth it. You are worth it.</p>
          <p>
            <Link to="/whyschool.jsx">{"Learn why school >"}</Link>
          </p>
        </div>
        <div className="fees">
          <div className="fees-svg"></div>
          <h1>PAYING FOR SCHOOL</h1>
          <p>
            There are lots of options available to you. We can help you find
            them.
          </p>
          <p>
            <Link to="/fees.jsx">{"Learn how to pay for school >"}</Link>
          </p>
        </div>
        <div className="roadmap">
          <div className="roadmap-svg"></div>
          <h1>YOUR SCHOOL ROADMAP</h1>
          <p>The path may seem unclear. We can help you find your way.</p>
          <p>
            <Link to="/roadmap.jsx">{"Learn how to get to school >"}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
