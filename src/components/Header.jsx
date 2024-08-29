import { Link } from "react-router-dom";
import img1 from "/images/swigy_logo.png"
import { useState,useEffect,useContext } from "react";
// const img1= require("/images/swigy_logo.png");
// import img1 from "../../public/images/swigy_logo.png";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowSearch } from "../utils/gptSlice";




export const Header=()=>{
    const [btnName,setbtnName]=useState("Login");

    const onlineStatus= useOnlineStatus();
    const search=useSelector(store=>store.search.searchPage)

    const loginData= useContext(UserContext)
    const dispatch=useDispatch(true)

    // console.log(loginData);

    const {loggedIn}=loginData

    //subscribing  to the store using the Selector
    const cartItems= useSelector((store)=>store.cart.items)
    // console.log(cartItems);




    useEffect(()=>{
        // console.log("useEffect Called");
    },[btnName]);

    const handleSearch = () => {
        dispatch(toggleShowSearch(true)); // Toggle search to true when clicked
      };
    
    return(
        <div className="flex fixed bg-white w-full z-30  justify-between p-3 shadow-md   text-neutral-800 select-none font-outfit">


            <div className="logo-container">
            <img  className="w-44" src={img1}/>
            </div>

            <div  className="flex  items-center ">
                <ul className="flex text-lg font-medium ">
                    {/* <li className="mr-16">{onlineStatus?"online":"offline "}</li> */}
                 <Link to={"/search"}> <li className="mr-16 text-base cursor-pointer" onClick={handleSearch}>Search</li></Link>  
                    <li className="mr-16 text-base"><Link to="/">Help</Link></li>   

                    <li className="mr-16 text-base"><Link to="/">Home</Link></li>   
                    {/* <li className="mr-16"><Link to="/about"><i className="fa-solid fa-address-card text-[30px] "></i></Link></li> */}
                    {/* <li className="mr-16"><Link to="/contact">Contact</Link></li> */}


                    <li className="mr-16 "><Link to="/cart"><i className=" text-[20px] fa-solid fa-cart-shopping"></i><button className="bg-orange-500 px-2 rounded-full text-sm absolute mr-20">{cartItems.length}</button></Link></li>


                    {/* <li className="mr-16"><Link to="/grocery">Grocery</Link></li> */}
                    <button className="log-in mr-16 text-base" onClick={()=>{

                       btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                        // console.log(btnName);
                    }}>{btnName}</button>
                    {/* <li className="mr-16 text-lime-600"><Link to="">{loggedIn}</Link></li> */}

                </ul>
            </div>
        </div>
    )
}

export default Header;