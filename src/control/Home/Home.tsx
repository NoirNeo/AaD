import React from "react";
import './Home.css';
import { SideBar } from "../Common/SideBar";
import { News } from "./News/News";
import { IconList } from "./IconList/IconList";
import axios from "axios";

interface props{
}

interface states{
    home_image: string;
}

class Home extends React.Component<props, states>{
    constructor(props: props){
        super(props);
        this.state={
            home_image:"",
        }
    }

    async componentDidMount() {
        try{
            const response = await axios.get("http://localhost:3000/api/imagebytype", {
                params: {
                    type: "home"
                }
            });
            this.setState((old) => ({
                home_image: response.data.path
            }));
        }catch (error) {
            console.error("Error fetching images:", error);
        }
    }
    
    render(){
        return(
            <div className = "Home">
                <SideBar/>
                <div className = "Main">
                    <img src = {this.state.home_image}/>
                    <h1>News</h1>
                    <News/>
                    <IconList/>
                </div>
            </div>
        );
    }
}

export default Home;