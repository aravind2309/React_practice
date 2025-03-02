import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauantMenu from "../utils/useRestrauntMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";
const RestaurantMenu =()=>{
const[showIndex,setShowIndex]=useState(null);
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
    (c)=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );


  
  return(
    <div className="text-center">
    <h1 className="font-bold my-10 text-2xl">{name}</h1>
    <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
    {categories.map((category,index)=>(
    <RestaurantCategories key={category?.card?.card?.categoryId}   
    showItems={showIndex===index? true:false}  
    setShowIndex={()=>{ console.log(index)
      setShowIndex(showIndex===index? null:index)}}data={category?.card?.card}/>
  ))}
 </div>
  )
}
export default RestaurantMenu;