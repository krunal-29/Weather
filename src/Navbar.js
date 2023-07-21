import React, { Component } from "react";
import "./Weather.css";

class Navbar extends Component{

    render(){
        return(
            <div className="head">
               
  <div className="fs-2 text-center">
  <span className="fs-1 align-middle">&#9729;</span> Current Weather <span className="fs-1 align-middle">&#9729;</span>
  </div>

            </div>
        )
    }
}
export default Navbar;