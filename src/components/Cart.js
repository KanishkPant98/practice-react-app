import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return (<div className="text-center m-4 p-4">
        <h1 className="font-bold text-xl">Cart</h1>
        {cartItems?.length !=0 ? <button className="p-2 m-2 border border-black bg-amber-300" onClick={handleClearCart}>Clear Cart</button> :
        <h3>Cart is Empty!</h3>}
        <div className="w-6/12 m-auto">
           <ItemList items={cartItems}></ItemList> 
        </div>
    </div>)
}
export default Cart