import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState('Login');

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={()=>{
              const status = btnNameReact == 'Login' ? 'Logout' : 'Login'
              setBtnNameReact(status)
            }}
            className="btn-login">{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  }

export default Header;