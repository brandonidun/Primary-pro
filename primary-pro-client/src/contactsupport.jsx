import Navbar from "./navbar";
import { useState } from "react";

const ContactSupport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here
  };
  return (
    <div className="contactsupport-page">
      <Navbar />
      <div className="why-school-banner">
        <div className="why-school-header">
          <h1>Need help? We're</h1>
          <h1>always here for you.</h1>
          <div className="header-underline"></div>
        </div>
        <div className="why-school-svgs">
          <div className="svg1"></div>
          <div className="svg2"></div>
          <div className="svg3"></div>
        </div>
      </div>
      <div className="why-school-info-banner">
        <div className="why-school-info">
          <h1></h1>
          <p>
            If you need guidance or have questions while going through the
            process, don’t hesitate to reach out to us.
          </p>
        </div>
      </div>
      <div className="help-form-container">
        <form className="help-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSupport;
