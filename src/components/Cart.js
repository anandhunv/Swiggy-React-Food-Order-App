import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { CART_EMPTY, MENU_ITEMS_IMAGE } from "../utils/constants";
import { clearCart, removeItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = ()=>{


        //subscribing  to the store using the Selector
    const cartItems= useSelector((store)=>store.cart.items)
    console.log(cartItems);

    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    const handleRemoveItem=()=>{
        dispatch(removeItems())
    }
  

    return (
        

        <div className="cart bg-gray-200 w-full py-10 h-screen px-14  flex justify-between">
{/* 
            <div className="left   w-2/4 mt-16">

           
                <div className="Account  mb-5  bg-white p-5">

                    <h1 className="font-bold">Account</h1>
                    <p className="text-zinc-400">To place your order now, log in to your existing account or sign up.</p>
                 <div className="flex   m-1">
                <button className=" m-8 px-7 border border-solid border-lime-500 text-lime-600">Have an account? <br/> <span className="font-bold"> Login</span></button>
                <button className=" m-8 px-7  bg-lime-600 text-stone-50">New to Swiggy? <br/>  <span className="font-bold"> SignUp</span> </button>
                 </div>
                </div>

              <div className="DeliverAdress   mb-5  bg-white   p-8">

                <h1 className="font-extrabold text-gray-400  ">Delivery Address</h1>

                </div>

             <div className="Payement   bg-white p-8">

                <h1 className="font-extrabold text-gray-400 ">Payment</h1>

             </div>
             </div> */}

            <div className="right w-full ml-10 mt-16  " data-testId="cartItems">

        {cartItems.length===0 && (<div className="bg-white p-5 h-80 flex justify-center items-center flex-col">

            <div className="flex justify-center items-end">
                <img src={CART_EMPTY} className="w-[350px] "/>
                <h1 className="absolute font-semibold text-orange-500 ">Your Cart Is Empty!</h1>
            </div>
            <div>
                <button className="p-2 my-2 bg-yellow-400 rounded-md hover:bg-amber-500" ><Link to={"/"}>See Your Nearest Restaurants</Link> </button>
            </div>
            
        </div>)}


            {cartItems.map((item)=>(
                <div key={item.card.info.id} className="Head   bg-white p-5 flex justify-between ">

                    <img src={MENU_ITEMS_IMAGE + item.card.info.imageId} className="w-14 h-14"/>
                    <div className="ml-6 w-full ">
                    
                    <h1 className="font-bold "> {item.card.info.name} <br/>
                    <span className="text-zinc-400">₹{item.card.info.price?  item.card.info.price/100 : item.card.info.defaultPrice /100}</span>
                    </h1>
                    </div>
                    <div className="  ml-36 flex items-end justify-end p-2  w-8 h-4 mt-11">
                    {/* <button className=" text-slate-50 bg-green-500 px-3 rounded-lg  p-1 mr-4" onClick={handleRemoveItem}>Buy</button> */}

                    </div>
                  
                   
                    
                    
               
            

             </div>

             ))}
             {cartItems.length!==0 &&
            <div className="clearCart mt-2 flex justify-between w-full ">
             <button className="p-2 rounded-lg bg-orange-500 " onClick={handleClearCart}>Clear Cart</button>
             <button className=" text-white  bg-red-600 px-3 rounded-lg   p-2" onClick={handleRemoveItem}>remove from bottom</button>


            </div>
                    }

            </div>

            

        </div>

    )
}

export default Cart;