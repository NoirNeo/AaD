import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import "./Menu.css";

interface hprops {

}

interface hstate{
    open: boolean;
}

export class Menu extends React.Component<hprops, hstate>{
  constructor(props:hprops){
    super(props)
    this.state={
      open:true,
    }
  }

    render(){
        return(
          <div>
            <div className="Menu">
              <ul>
                <li><a href="\">Home</a></li>
                <hr/>
                <li><a href="\config">Config</a></li>
                <hr/>
                <li><a href="\comic">Comic</a></li>
              </ul>
            </div>
            {/*
            //開閉式サイドバー
            <div className="SideBar" style={{transition: "transform 300ms", transform: this.state.open ? "translateX(0)" : "translateX(-100%)"}}>
              <button
                onClick={
                  () => this.setState({open: !this.state.open})
                }
              >
                {
                  this.state.open ?  <FiChevronRight/> : <FiChevronLeft/>
                }
              </button>
              <h2>メニュー</h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li><a href="\" style={{ color: "white", textDecoration: "none" }}>ホーム</a></li>
                <li><a href="\config" style={{ color: "white", textDecoration: "none" }}>設定</a></li>
                <li><a href="\comic" style={{ color: "white", textDecoration: "none" }}>コミック</a></li>
              </ul>
            </div>
            */}
          </div>
        );
    }
}