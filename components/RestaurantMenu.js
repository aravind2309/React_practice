import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauantMenu from "../utils/useRestrauntMenu";
import RestaurantCategories from "./RestaurantCategories";
const RestaurantMenu =()=>{
  const {rid}=useParams();
  console.log(rid);
 const resInfo= useRestrauantMenu(rid);
 
  if(resInfo===null) return <Shimmer/>;
  
  const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
  const regularCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const menuCard = regularCards.find(card => card?.card?.card?.itemCards);
  const itemCards = menuCard?.card?.card?.itemCards || [];
   console.log(regularCards);
  const categories=regularCards.filter(
    (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"||
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

   console.log("Menu Items:",itemCards);
  
  return(
    <div className="text-center">
    <h1 className="font-bold my-10 text-2xl">{name}</h1>
    <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
    {categories.map((category)=>(
    <RestaurantCategories data={category?.card?.card}/>
  ))}
 </div>
  )
}
export default RestaurantMenu;