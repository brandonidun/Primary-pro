import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-banner">
            <div className="motto">
                <h1>This is where your future starts.</h1>
                <p>enroll in a school for the first time or lets help you with your transfer of schools.</p>
                <div className="start-application-buttons">
                <Link to="/signup.jsx">
                    <button type='submit'>start application</button>
                </Link>
                </div>
            </div>
        </div>
      );
}
 
export default Home;