import MenuList from "./MenuList";


const RestaurantAccordianceCategory =({data,showItems,setShowIndex})=>{
    const {title,itemCards}=data
    const length=itemCards.length;

    

    const handleClick=()=>{


    setShowIndex(showItems?true:false)
    
       
    }
 
    return (
        <div>
        <div className=" flex justify-between mt-9 cursor-pointer " onClick={handleClick} >
                <span className="font-extrabold  text-gray-900 mb-2">{title}({length})</span>
            <span className="font-medium" >{showItems ?<i className="fa-solid fa-angle-down"></i>:<i className="fa-solid fa-angle-up"></i>}</span>
            </div>

            <div className=" flex flex-col mt-7 ">


           {showItems && <MenuList  items={data?.itemCards}/>}

        </div>
        <div className="w-full h-4 bg-slate-200 -mt-1  "> </div>
        
        </div>
     
    )

}

export default RestaurantAccordianceCategory;