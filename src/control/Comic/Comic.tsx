import React from "react";
import { SideBar } from "../Common/SideBar";
import './Comic.css';
import { PagingSystem } from "./PagingSystem/PagingSystem";

export class Comic extends React.Component{
    render(){
        return(
            <div className="Comic">
                <SideBar/>
                <div className="Main">
                    <div className="Title">Comic</div>
                    <div className="No">第1話</div>
                    <div className="Abstract">ある夜大きな橋の上には男が立っていた．彼は飛び降りようとしていたのだ．彼の言い分はいかに...</div>
                    <PagingSystem/>
                </div>
            </div>
        );
    }
}