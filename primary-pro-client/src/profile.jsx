import { Link } from "react-router-dom";
import ProfileNavbar from "./profileNavbar";

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
        <div className="profile-help">
          <h1>Need Help?</h1>
          <p>
            How many colleges can I add to my Dashboard? Common App member
            colleges have stipulated that applicants may add up to 20 colleges.
            The college list cannot be expanded for any applicant. Once you
            submit an application, that college can no longer be removed from
            your list of colleges.
          </p>
          <p>
            How can I remove a school from my Dashboard? You can remove a school
            by clicking the X icon on the school name line on the Dashboard.
            However, a school cannot be removed from your list once the
            application has been submitted. You can re-add any school you've
            removed by searching for and adding the school again.
          </p>
          <p>
            How can I add a college to my Dashboard? You can add a college from
            the College Search tab. Then follow these steps: 1. Search for the
            school using the available search criteria 2. In the Results List,
            click on the + button beside the college name. You will know that
            the school has been added to your My Colleges page by the green
            check indicator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
