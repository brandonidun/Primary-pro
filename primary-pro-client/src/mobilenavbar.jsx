import Navbar from "./navbar";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import {
  CaretDownIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

const Mobilenavbar = () => {
  return (
    <div className="mobile-navbar-page">
      <Navbar />
      <div className="mobile-navbar-content">
        <div className="mobile-navbar-buttons">
          <ul>
            <NavigationMenu.Root>
              <NavigationMenu.List>
                <NavigationMenu.Item>
                  <Link to="/schoolgrid.jsx">
                    <a href="">{"FIND A SCHOOL"}</a>
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="item">
                  <NavigationMenu.Trigger asChild>
                    <a href="">apply to a school</a>
                  </NavigationMenu.Trigger>
                  <CaretDownIcon className="CaretDown" aria-hidden />
                  <NavigationMenu.Content className="item-content">
                    <Link to="/signup.jsx">
                      <li>First time applicant</li>
                    </Link>
                    <Link to="/login.jsx">
                      <li>Reapply</li>
                    </Link>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="item">
                  <NavigationMenu.Trigger asChild>
                    <a href="">Plan for college</a>
                  </NavigationMenu.Trigger>
                  <CaretDownIcon className="CaretDown" aria-hidden />
                  <NavigationMenu.Content className="item-content">
                    <div className="nav-menu">
                      <Link to="/whyschool.jsx">
                        <li>Why school matters</li>
                      </Link>
                      <Link to="/fees.jsx">
                        <li>Paying for school</li>
                      </Link>
                      <Link to="/roadmap.jsx">
                        <li>your path to school</li>
                      </Link>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </ul>
        </div>
        <div className="login-signup-buttons-navbar">
          <Link className="login-mobile-navbar" to="/login.jsx">
            login
          </Link>
          <Link className="sign-up-mobile-navbar" to="/signup.jsx">
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mobilenavbar;
