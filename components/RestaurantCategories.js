const RestaurantCategories=({data})=>{
  console.log(data);
  return(
    <div>
     <div>
      <span>{data.title}</span>
     </div>
    </div>
  )
}
export default RestaurantCategories;