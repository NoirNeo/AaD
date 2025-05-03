import React from "react";
import { AiOutlineX } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import "./IconList.css"

export class IconList extends React.Component{
    render(){
        return(
            <div className = "IconList">
                <a href="https://x.com/OsT5nvgLNX46815">
                    <AiOutlineX className="LinkIcon"/>
                </a>
                <a>
                    <FaYoutube className="LinkIcon" onClick={() => window.open()}/>
                </a>
            </div>
        );
    }
}