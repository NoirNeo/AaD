import React from "react";
import { Menu } from "./Menu/Menu";
import "./SideBar.css"

export class SideBar extends React.Component{
    render(){
        return(
            <>
                <div className="SideBar">
                    <div className="Title">
                        天使と悪魔
                    </div>
                    <Menu/>
                </div>
                <div className="SideBar-BackGround"/>
            </>
        )
    }
}