import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import { Config } from "../Config/Config";

class Routing extends React.Component{
    render(){
        return(
                <div>
                    <Router>
                        <Routes>
                            <Route exact path = '/' element = {<Home/>}/>
                            <Route path = '/config' element = {<Config/>}/>
                            {/*<Route path = '/*' element = {<Error/>}/>*/}
                        </Routes>
                    </Router>
                </div>
            )
    }
}

export default Routing;