import Navbar from './navbar';
import Home from './home';
import Search from './search';
import Faq from './faq';

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
      </div>
    </div>
  );
}

export default App;
