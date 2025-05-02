import React from "react";
import './Home.css';
import { SideBar } from "../Common/SideBar";
import { News } from "./News/News";

class Home extends React.Component{
    render(){
        return(
            <div className = "Home">
                <SideBar/>
                <div className = "Main">
                    <img src = "./images/home_illust_1.jpg"/>
                    <h1>News</h1>
                    <News/>
                </div>
            </div>
        );
    }
}

export default Home;