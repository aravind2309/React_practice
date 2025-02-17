import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
  const[btnNameReact,setNameReact]=useState("Login");
  const onlineStatus=useOnlineStatus();
  return(
  <div className="flex justify-between bg-green-100 shadow-lg mb-2">
    <div className="logo-container">
      <img className="w-56"src={LOGO_URL}></img>
    </div>
     <div className="flex items-center">
      <ul className="flex p-4 m-4">
        <li className="px-4">Network Connection:{onlineStatus?"✅":"❌"}</li>
        <li className="px-4 text"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about">About Us</Link></li>
        <li className="px-4"><Link to="/contact">Contact Us</Link></li>
        <li className="px-4">Cart</li>
        <button className="login" onClick={()=>
          {btnNameReact==="Login"?setNameReact("Logout"):setNameReact("Login")
          }}>{btnNameReact}</button>
      </ul>
     </div>
  </div>
  );
};
export default Header;