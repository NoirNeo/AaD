import React from "react";
import { SideBar } from "../Common/SideBar";
import "./Config.css";

export class Config extends React.Component{
    render(){
        return(
            <div className = "Home">
                <SideBar/>
                <div className = "Config">
                    <h1>設定</h1>
                </div>
            </div>
        );
    }
}