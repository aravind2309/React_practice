import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../cartSlice";
import { useDispatch } from "react-redux";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
      dispatch(clearCart())
    }
    
    return(
        <div className="text-center m-2 p-2">
            <h1 className="text-xl font-bold">Cart</h1>
            <button className="p-2 m-2 text-white bg-black rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto">
            {cartItems.length===0? "No items found. Please add some items.":
                <ItemList items={cartItems}/>
            }
            </div>
            
        </div>
    )
}
export default Cart;