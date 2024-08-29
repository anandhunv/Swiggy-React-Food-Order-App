import { useState } from "react";
const User=(props)=>{
    const [count,setOfCount]=useState(234234)
    const [count2]=useState(8908);
    const {name,location}=props;

    return <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:96560098</h4>
        <h4>Number of Goals: {count} <button onClick={()=>{
            setOfCount(count+1)
        }}>click for update Goal</button></h4>
        <h4>Number of Assist: {count2}</h4>

    </div>
}

export default User;