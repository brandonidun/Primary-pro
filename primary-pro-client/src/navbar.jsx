import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  CaretDownIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
const Navbar = () => {
  // $(document).ready(function () {
  //   $(window).scroll(function () {
  //     if ($(document).scrollTop() > 50) {
  //       $(".navbar").css("background", "red");
  //     } else {
  //       $(".navbar").css("background", "");
  //     }
  //   });
  // });

  return (
    <div className="navbar">
      <div className="title">
        <Link to="/">
          <h1>PrimaryPro</h1>
        </Link>
      </div>
      <div className="buttons">
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
                  <a>Plan for college</a>
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
              <NavigationMenu.Item className="item">
                <NavigationMenu.Trigger asChild>
                  <a>apply to a school</a>
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
            </NavigationMenu.List>
          </NavigationMenu.Root>
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
      <div className="buttons-mobile">
        <Link to="/mobilenavbar.jsx">
          <HamburgerMenuIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
