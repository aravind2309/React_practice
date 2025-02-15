import { CDN_URL } from "../utils/constants"

const RestaurantCard=({restaurant})=>{
  const{name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=restaurant
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="res-logo"src={CDN_URL+cloudinaryImageId}></img>
     <h3>{name}</h3>
     <h4>{Array.isArray(cuisines) ? cuisines.join(', ') : "No cuisines available"}</h4>
     <h4>{avgRating}</h4>
     <h4>{costForTwo}</h4>
     <h4>{sla.slaString}</h4>
    </div>
  )
}
export default RestaurantCard;