import { LOGO_URL } from "../utils/constants";
import { useEffect, useState,useContext} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //If dependency array is defined, then useEffect is called whenenvever it is updated
  //If nothing is passed then useEffect will be called every time the componennt is renderred
  //If an empty array is passed then useEffect will be called only one time on itial render
  useEffect(() => {
    console.log("Hello");
  },[btnNameReact]);//state 
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between shadow-lg mb-2 sm: bg-pink-50 lg:bg-green-50">
      <div className="w-40">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 mt-4">
          <li className="px-4 cursor-pointer">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 cursor-pointer"><Link to = '/'>Home</Link></li>
          <li className="px-4 cursor-pointer"><Link to = '/about'>About Us</Link></li>
          <li className="px-4 cursor-pointer"><Link to = '/contact'>Contact Us</Link></li>
          <li className="px-4 cursor-pointer"><Link to = '/cart'>Cart</Link></li>
          <li className="px-4 cursor-pointer"><Link to = '/grocery'>Grocery</Link></li>
          <button
            onClick={() => {
              const status = btnNameReact == "Login" ? "Logout" : "Login";
              setBtnNameReact(status);
            }}
            className=""
          >
            {btnNameReact}
          </button>
          <li className="px-4 cursor-pointer font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
