import { Link } from "react-router-dom";

const ProfileNavbar = () => {
  const name = "Brandon";
  const id = "234567";
  const email = "biduntawiah@gmail.com";

  return (
    <div className="profile-navbar">
      <Link to="/">
        <h1>PrimaryPro</h1>
      </Link>
      <div className="profile-navbar-buttons">
        <ul>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <Link to="/">
              <a href="">My Schools</a>
            </Link>
          </li>
          <li>
            <a href="">Profile Info</a>
          </li>
          <li>
            <a href="">School Search</a>
          </li>
        </ul>
      </div>
      <div className="profile-details">
        <div className="profile-photos"></div>
        <div className="profile-writings">
          <p>Welcome {name},</p>
          <p>{id}</p>
          <p>{email}</p>
        </div>
        <button type="submit">
          <Link to="/">
            <a href="">sign out</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProfileNavbar;
