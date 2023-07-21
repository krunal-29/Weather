import React, { Component } from "react";
import axios from 'axios'
import "./Weather.css";
import Table from "./Table";
class Wather extends Component{
    constructor(){
        super()
        this.state={textInput:" ",conutry:" ",region:" ",temp_c:" ",feelslike_c:" ",temp_f:" ",feelslike_f:" ",
        last_updated:" ",wind_kph:" ",humidity:" ",wind_mph:" ",dtable:false,city:" "
                }
    }
    handleClick=()=>{
        let apiKey = "887f8d8fbed04628be085053231007"
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.state.textInput}`)
        .then((res)=>{
           
            let location= res.data.location
            this.setState({conutry:location.country})
            console.log(location)
            
            console.log(res)
            this.setState({region:location.region})
            
            let current = res.data.current
            this.setState({temp_c:current.temp_c})
            this.setState({feelslike_c:current.feelslike_c})
            this.setState({temp_f:current.temp_f})
            this.setState({feelslike_f:current.feelslike_f})
            this.setState({last_updated:current.last_updated})
            this.setState({wind_kph:current.wind_kph})
            this.setState({humidity:current.humidity})
            this.setState({wind_mph:current.wind_mph,dtable:true})
            this.setState({city:location.name})
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div className="container">
               <div className="input-group input-group-lg  mb-3 mt-4  " >
 
  <input type="text" className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{this.setState({textInput:e.target.value})}} placeholder="Enter City"/>
  <button type="button" className="btn btn-primary" onClick={()=>{this.handleClick()}}>Submit</button>
</div>
         
         
      
       
      
        

{this.state.dtable?(<Table my={this.state}/>):('') }

            
            </div>
        )
    }
}
export default Wather;