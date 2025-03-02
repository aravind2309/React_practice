import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
  const[btnNameReact,setNameReact]=useState("Login");
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items);
  console.log(cartItems);
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
        <li className="px-4 font-bold text-lg"><Link to="/cart">Cart-({cartItems.length}items)</Link></li>
        <button className="login" onClick={()=>
          {btnNameReact==="Login"?setNameReact("Logout"):setNameReact("Login")
          }}>{btnNameReact}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
      </ul>
     </div>
  </div>
  );
};
export default Header;