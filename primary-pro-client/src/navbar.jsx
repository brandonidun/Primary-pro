import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Link to="/">
          <h1>PrimaryPro</h1>
        </Link>
      </div>
      <div className="buttons">
        <ul>
          <li>
            <a href="">find a school</a>
          </li>
          <li>
            <a href="">apply to a school</a>
          </li>
          <li>
            <a href="">search</a>
          </li>
          <Link to="/login.jsx">
            <li className="login-button">
              <a href="">login</a>
            </li>
          </Link>
          <Link to="/signup.jsx">
            <li className="signup-button">
              <a href="">sign up</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
