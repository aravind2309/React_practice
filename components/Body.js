import RestaurantCard from "./RestaurantCard"
import reslist from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = ()=>{
  const [listOfRestrauant,setlistOfRestrauant]=useState([]);
  const [searchText, setSearchText]=useState('');
  const[filteredRestrauant,setFilteredOfRestrauant]=useState([]);
  
  useEffect(()=>{
    fetchData();
  },[])

   const fetchData=async()=>{
   const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json=await data.json();
   console.log(json);

   let res=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
   let res1=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
   setlistOfRestrauant([...res, ...res1]);
   setFilteredOfRestrauant([...res, ...res1]);
   
  }
 const onlineStatus=useOnlineStatus();
 if (onlineStatus===false) 
return(
 <h1>Something went wrong please check your internet connection</h1>)

  return listOfRestrauant.length === 0 ? <Shimmer/>:(
  <div className="body">
    <div className="filter">
     <input type="text" className="search-box" value={searchText} onChange={(e)=> setSearchText(e.target.value)} ></input>
      <button className="searchBtn" onClick={()=>{
      const filteredres=listOfRestrauant.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
       setFilteredOfRestrauant(filteredres);
      }}>Search</button>
      <button className="searchBtn" onClick={()=>{
          const filteredList=listOfRestrauant.filter((res)=>res.info.avgRating > 4);
          setFilteredOfRestrauant(filteredList);
          }}>Top rated restaurant</button>
    </div>
   <div className="res-container">
   {filteredRestrauant.map((restaurant) => (
      < Link key={restaurant.info.id} to={"restaurant/"+restaurant.info.id} className="restaurant-link">< RestaurantCard  restaurant={restaurant.info}/>  </Link>
        ))}
    </div>
  </div>
  )
}
export default Body;