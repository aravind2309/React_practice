import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauantMenu from "../utils/useRestrauntMenu";
const RestaurantMenu =()=>{
  const {rid}=useParams();
  console.log(rid);
 const resInfo= useRestrauantMenu(rid);
 
  if(resInfo===null) return <Shimmer/>;
  
  const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
  const regularCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const menuCard = regularCards.find(card => card?.card?.card?.itemCards);
  const itemCards = menuCard?.card?.card?.itemCards || [];

   console.log("Menu Items:",itemCards);
  
  return(
    <div className="menu">
    <h1>{name}</h1>
    <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
    <h2>Menu</h2>
    <ul>
      {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name}-Rs:{item?.card?.info?.price/100}</li>)}
    </ul>
    </div>
  )
}
export default RestaurantMenu;