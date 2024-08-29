import { useEffect, useState } from "react";
import { API_MENU_URL } from "../utils/constants";


const useRestaurentMenuData=(resId)=>{

    const [resInfo,setOfResInfo]=useState(null);


    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async ()=>{

        const data = await fetch(API_MENU_URL+resId);
        const json = await data.json();
        setOfResInfo(json?.data);

    }

    return resInfo;
}

export default useRestaurentMenuData;