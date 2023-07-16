const Profile = () => {
    const name = "Brandon"
    const id = "234567"
    const email = "biduntawiah@gmail.com"
    
    return (
        <div className="profile-navbar">
            <h1>PrimaryPro</h1>
            <div className="profile-details">
                <div className="profile-photos"></div>
                <div className="profile-writings">
                    <p>Welcome {name},</p>
                    <p>{id}</p>  
                    <p>{email}</p>
                </div>
                <button type="submit">
                    sign out
                </button>
            </div>
        </div>
     );
}
 
export default Profile;