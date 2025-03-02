import ItemList from "./ItemList";
const RestaurantCategories=({data,showItems,setShowIndex})=>{
  return(
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
      <div className="flex justify-between items-center p-4  cursor-pointer" onClick={setShowIndex}>
      <span className="font-bold -mx-4">{data.title}({data.itemCards?.length})</span>
      <span>⬇️</span>
     </div>
     {showItems && <ItemList items={data.itemCards}/>}
    </div>
  )
}
export default RestaurantCategories;