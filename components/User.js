import { useState } from "react";
const User=({name,role,app,ver})=>{
  const[count]=useState(0);
  
  return(
    <div className= "user-class">
    <h1>{name}</h1>
    <h2> {role}</h2>
    <h3>{app}</h3>
    <p>{ver}</p>
    <h4>{count}</h4>
    </div>
    
  )
}
export default User;