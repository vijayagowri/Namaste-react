import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        this.state =
            {
                parentCount:100
            }
        console.log("constructor --parent");
    }

    render(){
        this.timer = setInterval(() => {
            console.log("rneder")
        }, 1000);

        console.log("render --parent");
        return(
            <div>
            <h1>This is about Class component {this.state.parentCount}</h1>
            <button onClick={()=>{
                this.setState({
                    parentCount: 1
                })

            }}>Parent</button>
            <ProfileClass name="child1"/>

            {/* <Profile name="Gowri"/> */}
        </div>
        )
    }
componentDidMount(){
    console.log('component did mount --parent')
}

componentDidUpdate(){
    console.log("component did update --parent")
} 

componentWillUnmount(){
    clearInterval(this.timer)
    console.log("component unmount --parent")
}

}

export default About;