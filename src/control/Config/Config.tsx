import React from "react";
import { SideBar } from "../Common/SideBar";
import "./Config.css";

export class Config extends React.Component{
    render(){
        return(
            <div className = "Config">
                <SideBar/>
                <div className = "Main">
                    <div className="Title">設定</div>
                </div>
            </div>
        );
    }
}