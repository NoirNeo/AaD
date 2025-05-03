import React from "react";
import './PagingSystem.css';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

interface page_props{
}

interface page_states{
    page_list: String[];
    current_page: number;
}

export class PagingSystem extends React.Component<page_props, page_states>{
    constructor(props:page_props){
        super(props);
        this.state={
            page_list:["comic_001.jpg", "comic_002.jpg", "comic_003.jpg", "comic_004.jpg",
                "comic_005.jpg", "comic_006.jpg", "comic_007.jpg", "comic_008.jpg",
                "comic_009.jpg", "comic_010.jpg", "comic_011.jpg", "comic_012.jpg",
                "comic_013.jpg", "comic_014.jpg", "comic_015.jpg", "comic_016.jpg",
                "comic_017.jpg", "comic_018.jpg",
            ],
            current_page: 0,
        };
    }

    componentDidMount() {
        console.log(this.state.current_page);
    }

    nextPage = ()  => {
        if(this.state.current_page < this.state.page_list.length / 2){
            this.setState((old) => ({
                current_page: old.current_page + 1,
            }));
        }
    }

    prePage = ()  => {
        if(this.state.current_page > 0){
            this.setState((old) => ({
                current_page: old.current_page - 1,
            }));
        }
    }

    render(){
        return(
            <div className="PagingSystem">
                <div className="Main">
                    {
                        this.state.current_page == this.state.page_list.length / 2 ? <div className="Empty"/> : <img className = "Left" src = {`/comic/${this.state.page_list[this.state.current_page * 2]}`}/>
                    }
                    {
                        this.state.current_page == 0 || this.state.current_page == this.state.page_list.length / 2 ?  <></> : <div className="Border"/>
                    }
                    {
                        this.state.current_page == 0 ? <></> : <img className = "Right" src = {`/comic/${this.state.page_list[this.state.current_page * 2 - 1]}`}/>
                    }
                </div>
                <button onClick={() => this.nextPage()}><BsChevronLeft/></button>
                <button onClick={() => this.prePage()}><BsChevronRight/></button>
            </div>
        );
    }
}