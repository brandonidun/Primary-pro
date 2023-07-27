import ProfileNavbar from "./profileNavbar";
import ProfileHelp from "./profileHelp";

const MySchools = () => {
  const name = "Brandon";
  const id = "234567";
  const email = "biduntawiah@gmail.com";

  return (
    <div className="profile-page">
      <ProfileNavbar />
      <div className="profile-banner">
        <div className="profile-dashboard">
          <h1>My Schools</h1>
          <p>
            In this tab you will continue your application for each college and
            you will:
          </p>
          <ul>
            <li>Complete college-specific questions and supplements</li>
            <li>Invite and manage recommenders</li>
            <li>Submit your application!</li>
          </ul>
        </div>
        <ProfileHelp />
      </div>
    </div>
  );
};

export default MySchools;
