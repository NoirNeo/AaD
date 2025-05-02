import React from "react";
import "./Header.css";
import { IoMdMenu } from "react-icons/io";

export class Header extends React.Component{
    render(){
        return(
            <div className="Header">
                <div className="Title">
                    天使と悪魔
                </div>
                <div className="Menu">
                    <IoMdMenu size={50} color="gold" />
                </div>
            </div>
        );
    }
}