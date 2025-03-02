import RestaurantCard from "./RestaurantCard"
import reslist from "../utils/mockData"
import UserContext from "./UserContext"
import { useContext, useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { withPromotedLabel } from "./RestaurantCard"


const Body = ()=>{
  const [listOfRestrauant,setlistOfRestrauant]=useState([]);
  const [searchText, setSearchText]=useState('');
  const[filteredRestrauant,setFilteredOfRestrauant]=useState([]);
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
  useEffect(()=>{
    fetchData();
  },[])
 
   const fetchData=async()=>{
   const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json=await data.json();
   console.log(json);

   let res=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
   //let res1=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
   setlistOfRestrauant(res);
   setFilteredOfRestrauant(res);
   
  }
  console.log(filteredRestrauant);
 const onlineStatus=useOnlineStatus();
 if (onlineStatus===false) 
return(
 <h1>Something went wrong please check your internet connection</h1>)
const{loggedInUser,setUserName}=useContext(UserContext);
  return listOfRestrauant.length === 0 ? <Shimmer/>:(
  <div className="body">
    <div className="filter flex ">
      <input type="text" data-testid="searchInput" className="search-box m-2 p-2 flex border border-solid border-black" value={searchText} onChange={(e)=> setSearchText(e.target.value)} ></input>
      <button className="p-2 m-2 bg-red-200 rounded-lg" onClick={()=>{
      const filteredres=listOfRestrauant.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
       setFilteredOfRestrauant(filteredres);
      }}>Search</button>
      <button className="p-2 m-2 flex bg-gray-200 rounded-lg" onClick={()=>{
          const filteredList=listOfRestrauant.filter((res)=>res.info.avgRating > 4.5);
          setFilteredOfRestrauant(filteredList);
          }}>Top rated restaurant</button>
          <div className="flex">
          <label className="m-2 p-2">Username:</label>
          <input type="text"className="border border-black p-2 m-2  " value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
          </div>
    </div>
   <div className="res-container flex flex-wrap justify-center text-center cursor-pointer ">
   {filteredRestrauant.map((restaurant) => (
      
      < Link key={restaurant.info.id} to={"restaurant/"+restaurant.info.id} className="restaurant-link">{restaurant.info.avgRating<3?
      <RestaurantCardPromoted restaurant={restaurant.info}/>:< RestaurantCard  restaurant={restaurant.info}/> } </Link>
        ))}
    </div>
  </div>
  )
}
export default Body;