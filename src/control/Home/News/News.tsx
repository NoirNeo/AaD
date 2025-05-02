import React from "react";
import './News.css';

const news_list = ["news_1.jpg", "news_2.jpg", "news_3.jpg", "news_4.jpg", "news_5.jpg"];

export class News extends React.Component{
    render(){
        return(
            <div className="News">
                {news_list.map((value, index) => {
                    return(
                        <div key = {`news_${value}`} className="Main">
                            {<img key = {`news_image_${value}`} src = {`./server/${value}`}/>}
                            <div className="Title">{value}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}