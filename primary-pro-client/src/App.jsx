import Navbar from "./navbar";
import Home from "./home";
import Search from "./search";
import Faq from "./faq";
import Help from "./help";

//work on hamburger menu
//work on search filters
//make functioning back end for schools and login and sign up
//use ionic to make the phone app
//find  proper school pictures
//make sure the profile is working properly
//fix backend for profile details
//work on the  contact support
//fix the  search drop menu

function App() {
  return (
    <div className="App">
      <div className="homepage">
        <div className="landing-page">
          <div className="navigation-bar">
            <Navbar />
          </div>
          <div className="home">
            <Home />
          </div>
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="faq">
          <Faq />
        </div>
        <div className="help">
          <Help />
        </div>
      </div>
    </div>
  );
}

export default App;
