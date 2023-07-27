import ProfileNavbar from "./profileNavbar";
import ProfileHelp from "./profileHelp";
import Search from "./search";

const ProfileSearch = () => {
  const name = "Brandon";
  const id = "234567";
  const email = "biduntawiah@gmail.com";

  return (
    <div className="profile-page">
      <ProfileNavbar />
      <div className="profile-banner">
        <Search />
        <ProfileHelp />
      </div>
    </div>
  );
};

export default ProfileSearch;
