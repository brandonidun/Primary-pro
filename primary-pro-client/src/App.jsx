import Navbar from "./navbar";
import Home from "./home";
import Search from "./search";
import Faq from "./faq";
import Help from "./help";
import { ScrollRestoration } from "react-router-dom";
import ScrollToTop from "./scrolltotop";

//use ionic to make the phone app
//make sure the profile is working properly
//credit page

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
      <ScrollRestoration />
    </div>
  );
}

export default App;
