import {useDispatch} from "react-redux";
import { addItem } from "../cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
  const dispatch=useDispatch();
  const handleAddItem= (item)=>{
    dispatch(addItem(item));
  }
    return (
        <div>
            {items.map((item)=>(
            <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" key={item.card.info.id}> 
                
                <div className="w-9/12">
                <div className="py-2">
                <span >{item.card.info.name}</span>
                <span>- ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100 }</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                   <div className="absolute">
                     <button className="p-2 mx-11 bg-white text-green-600 shadow-lg rounded" onClick={()=>handleAddItem(item)}>Add+</button>
                   </div>
                {item?.card?.info?.imageId && (  // ✅ Only render if imageId exists
              <img 
                src={CDN_URL + item?.card?.info?.imageId} 
                alt={item?.card?.info?.name || "Food Item"} 
                className="w-full h-auto rounded-lg shadow-sm mb-2"
              />
            )}
                </div>
            </div>
            ))}
            
        </div>
    )

}
export default ItemList;