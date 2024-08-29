import RestaurentCard from "./RestaurentCard ";

import OnMind from "./OnMind";
import { withVegLabel } from "./VegLabel";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { useState,useEffect,useContext } from "react";
import { Link, json } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import SearchPage from "./SearchPage";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowSearch } from "../utils/gptSlice";
import { addRest, addfilterRest } from "../utils/restaurentSlice";
import BodyCard from "./BodyCard";
import Info from "./Info";


const Body=()=>{

    const [listOfRestaurent,setlistOfRestaurent]=useState([]);
    const [filteredRestaurent,setFilteredRestaurent]=useState([]);
    const [restaurentChain,setRestaurentChain]=useState([]);
    const [restaurentTop,setRestaurentTop]=useState([]);


    const [onMindDetails,setOnMindDetails]=useState([]);


    const showSearch = useSelector((state) => state.search.showSearch);
    const [show,setShow]=useState(true);

    const dispatch=useDispatch()


    const [searchText,setSearchText]=useState("");

    const RestaurantCardVeg=withVegLabel(RestaurentCard); 
    
    const {loggedIn,setUserName}=useContext(UserContext);
    

    useEffect(()=>{

        fetchData();

    },[]);

    const fetchData = async ()=>{
        const data= await fetch(API_URL)
        const json= await data.json();
        console.log(json);

        setlistOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurentChain(json?.data?.cards[2]?.card?.card?.title)
        setRestaurentTop(json?.data?.cards[1]?.card?.card?.header?.title)

        setOnMindDetails(json?.data?.cards[0]?.card?.card)
        dispatch(addRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
        dispatch(addfilterRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))

       


    }
    
    console.log(onMindDetails);
   
console.log(listOfRestaurent);
    //conditionalrendering
    // if(listOfRestaurent.length===0){
    //     return <Shimmer/>
    // }
    const handleSearch=()=>{
        dispatch(toggleShowSearch(!show ))
        setShow(!show)
    }


   
  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false)
            return(
        <h1>Your are in offline</h1>       
            )
        

console.log(listOfRestaurent);

return !listOfRestaurent || listOfRestaurent.length === 0 ? <Shimmer /> : (

    <>
        <div className="body p-6 mx-14   flex  flex-col font-outfit">

     
      <div className="onMind  mt-24 mb-20">
       
            
              <OnMind minData={onMindDetails}/>
            
            
        </div>
<div>
    <h1 className="font-extrabold text-2xl text-neutral-950">{restaurentTop}</h1>
</div>

        <div className="topRestro flex overflow-scroll w-full " style={{scrollbarWidth:"none"}}>
        {listOfRestaurent.map((restaurent)=>(
              <Link key={restaurent.info.id}  to={"/restaurant/"+restaurent.info.id}>  
              
              {restaurent.info.veg?< RestaurantCardVeg  resData={restaurent.info}/>:  
              <RestaurentCard resData={restaurent?.info}/>}
             </Link>
               ))}

        </div>





          <div className="filter mt-5 border-t border-solid border-neutral-200 p-4">

          
<div>
    <h1 className="font-extrabold text-2xl text-neutral-950">{restaurentChain}</h1>
</div>

                <div>
                <button className="filter-btn  mb-10 px-5 mt-8 py-1 border border-solid border-gray-200 rounded-3xl mr-4" onClick={()=>{

                    const filteredList=listOfRestaurent.filter((res)=>res.info.avgRatingString > 4.5 )

                        setFilteredRestaurent(filteredList)
                }}>Top Rated</button>



                
                 <button className="filter-btn  mb-10 px-5 mt-8 py-1 border border-solid border-gray-200 rounded-3xl  mr-4" onClick={()=>{

                    const filteredList=listOfRestaurent.filter(
                       (res)=>{res.info.veg===true
                   
                    }
                       
                    
                       )
                       console.log(filteredList);

                        setFilteredRestaurent(filteredList)
                }}>Pure Veg</button>
                 <button className="filter-btn  mb-10 px-5 mt-8 py-1 border border-solid border-gray-200 rounded-3xl  mr-4" onClick={handleSearch}>Fast Delivery</button>


                 
                 {/* <input type="text" id="search-box" className="search-box border border-solid border-gray-400 outline-none w-40 h-8  mr-5 p-2" value={loggedIn} onChange={(e)=>{setUserName(e.target.value)}}/>
                 <button className="bg-gray-300 px-5 py-1 outline-none rounded-md"  >Add</button> */}

               
                 </div>
            </div>

{/* <BodyCard filteredRestaurent={filteredRestaurent}/> */}

          <div data-testid="rescard" className="restuarent-container flex  justify-start items-center pl-6 flex-wrap  ">

               {filteredRestaurent.map((restaurent)=>(
              <Link key={restaurent.info.id}  to={"/restaurant/"+restaurent.info.id}>  
              
              {restaurent.info.veg?< RestaurantCardVeg  resData={restaurent.info}/>:  
              <RestaurentCard resData={restaurent?.info}/>}
             </Link>
               ))}

            </div> 



        </div>
        <Info/>


        </>
            
 
    )
}

export default Body;





















  