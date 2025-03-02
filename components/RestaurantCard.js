import { useContext } from "react";
import { CDN_URL } from "../utils/constants"
import UserContext from "./UserContext";
const RestaurantCard=({restaurant})=>{
  console.log(restaurant);
  const{name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=restaurant
  const{loggedInUser}=useContext(UserContext);
  return(
    <div data-testid="resCard"className="res-card p-4 m-4 w-[230px] bg-gray-100 rounded-lg text-wrap hover:bg-gray-200">
      <img className="res-logo rounded-lg object-cover " alt="res-logo"src={CDN_URL+cloudinaryImageId}></img>
     <h3 className="font-bold py-4 text-lg">{name}</h3>
     <h4 className="text-wrap">{Array.isArray(cuisines) ? cuisines.join(', ') : "No cuisines available"}</h4>
     <h4>{avgRating}</h4>
     <h4>{costForTwo}</h4>
     <h4>{sla.slaString}</h4>
     <h4>User:{loggedInUser}</h4>
    </div>
  )
};
export const withPromotedLabel =(RestaurantCard)=>{
  return(props)=>{
    return(
        <div>
          <label>Promoted</label>
          <RestaurantCard {...props} />

        </div>
    );
  };
};
export default RestaurantCard;