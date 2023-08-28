import Navbar from "./navbar";
import Home from "./home";
import Search from "./search";
import Faq from "./faq";
import Help from "./help";
import { ScrollRestoration } from "react-router-dom";
import ScrollToTop from "./scrolltotop";

//make functioning back end for schools and login and sign up
//use ionic to make the phone app
//find  proper school pictures
//work on search filters
//make sure the profile is working properly
//fix backend for profile details
//fix bugs w css
//react context api
//google form
//netlify
//ionic
//mongo atlas
//hugging faces

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
      <ScrollToTop />
    </div>
  );
}

export default App;
