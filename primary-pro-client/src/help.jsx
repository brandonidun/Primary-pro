import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="help-banner">
      <div className="contact-support">
        <div className="contact-support-photo"></div>
        <div className="contact-support-writings">
          <h1>Have a question?</h1>
          <Link to="/contactsupport.jsx">
            <button>contact our support team</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
