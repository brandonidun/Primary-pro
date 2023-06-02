// import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

// const options = [
//   { key: 1, text: 'Choice 1', value: 1 },
//   { key: 2, text: 'Choice 2', value: 2 },
//   { key: 3, text: 'Choice 3', value: 3 },
// ]

// const DropdownExampleSimple = () => (
//   <Menu compact>
//     <Dropdown text='Dropdown' options={options} simple item />
//   </Menu>
// )
const Navbar = () => {
    return ( 
    <div className="navbar">
        <div className="title">
            <h1>PrimaryPro</h1>
        </div>
        <div className="buttons">
            <ul>
                <li><a href="">find a school</a></li>
                <li><a href="">apply to a school</a></li>
                <li><a href="">search</a></li>
                <Link to="/login.jsx">
                  <li className="login-button"><a href="">login</a></li>
                </Link>
                <Link to="/signup.jsx">
                <li className="signup-button"><a href="">sign up</a></li>
                </Link>
            </ul>
        </div>
    </div>
     );
}
 
export default Navbar;