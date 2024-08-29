import { Component } from "react"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"




class About extends Component{
    constructor(props){
        super(props)

        // console.log("parent constructor");
    }

    componentDidMount(){
        // console.log("parent MOUNT");
    }


    render(){
        // console.log("parent render");
        return(

            <div>
                <h1 className="font-extrabold text-[40px] flex justify-center items-center mx-24">About Us</h1>
                <UserContext.Consumer>
                    {({loggedIn})=><p>{loggedIn} look at our Developers</p>}
                </UserContext.Consumer>
                <UserClass  name={"Angel Di Maria"} location={"Benfica"}/>

            </div>
        )
    
    }
}




export default About