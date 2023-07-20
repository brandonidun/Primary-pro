import { Link } from 'react-router-dom';

const Profile = () => {
    const name = "Brandon"
    const id = "234567"
    const email = "biduntawiah@gmail.com"
    
    return (
        <div className="page">
        <div className="profile-page">
        <div className="profile-navbar">
            <Link to="/">
                <h1>PrimaryPro</h1>
            </Link>
            <div className="profile-details">
                <div className="profile-photos">

                </div>
                <div className="profile-writings">
                    <p>Welcome {name},</p>
                    <p>{id}</p>
                    <p>{email}</p>
                </div>
                <button type="submit">
                    <Link  to="/">
                        <a href="">
                            sign out
                        </a> 
                    </Link>
                </button>
            </div>
            </div>
        </div>
        <div className="body">
            hey
        </div>
        </div>
        
     );
}
 
export default Profile;