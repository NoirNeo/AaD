import React from "react";
import { Menu } from "./Menu/Menu";
import "./SideBar.css"

export class SideBar extends React.Component{
    render(){
        return(
            <>
                <div className="SideBar">
                    <div className="Title">
                        <a  href = "/">
                            天使と悪魔
                        </a>
                    </div>
                    <Menu/>
                </div>
                <div className="SideBar-BackGround"/>
            </>
        )
    }
}