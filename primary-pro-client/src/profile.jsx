import { Link } from "react-router-dom";
import ProfileNavbar from "./profileNavbar";
import ProfileHelp from "./profileHelp";

const Profile = () => {
  const name = "Brandon";
  const id = "234567";
  const email = "biduntawiah@gmail.com";

  return (
    <div className="profile-page">
      <ProfileNavbar />
      <div className="profile-banner">
        <div className="profile-dashboard">
          <h1>Welcome, {name}!</h1>
          <p>
            Congratulations on taking this first step in the school application
            process!
          </p>{" "}
          <p>Here are some tips to get you started: </p>
          <ul>
            <li>
              This tab is your Dashboard. After you add a school to your list,
              you will see your application progress here.
            </li>
            <li>
              All schools will need you to answer the common questions under
              your Common App tab.{" "}
            </li>
            <li>To apply to a college,head over to the College Search tab.</li>
            <li>
              Once you have added a college, you can complete and submit your
              application in the My Colleges tab.
            </li>
          </ul>
          <p>
            We are here to help you every step of the way! If you run into any
            questions or you need some help, check out our 24/7 Applicant
            Solutions Center , Opens in new tab or contact us, Opens in new tab
            at any time.
          </p>
        </div>
        <ProfileHelp />
      </div>
    </div>
  );
};

export default Profile;
