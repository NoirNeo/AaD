import React from "react";

import Admin from './control/admin/admin';
import'./fontConfig.css';
import './base.css';

class App extends React.Component{
  render(){
    return(
      <div className="Base">
        <Admin/>
      </div>
  )
  }
}

export default App;