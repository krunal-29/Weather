import React, { Component } from "react";
import Wather from "./Wather";
import Navbar from "./Navbar";


class App extends Component{
  constructor(){
    super()
   
  }
  
  

  render(){
    return(
      
      
      <div>
        <Navbar/>
        <Wather/>
        
        </div>
    )
  }

}
export default App;