
export const withVegLabel=(RestaurentCard)=>{
    return(props)=>{
      return(
        <div className="   w-60 flex rounded-3xl m-[2px]  ">
          {/* <label className="absolute">Veg</label> */}
                  <RestaurentCard {...props} />
              </div>
      )
    }
   }