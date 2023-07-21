import React, { Component } from 'react'

export class Table extends Component {
    constructor(props){
        super(props)
        this.j={}
    }
  render() {
    return (
      <div className=' row justify-content-center text-center' >
        <div className='col-md-6 d-flex justify-content-center'>
           
        
        <table class="table table-borderless ">
  <thead>
  <tr>
      <th scope="row">City</th>
      <td >{this.props.my.city}</td>
   
    </tr>
  <tr>
      <th scope="row">Country</th>
      <td >{this.props.my.conutry}</td>
   
    </tr>
    <tr>
      <th scope="row">Region</th>
      <td >{this.props.my.region}</td>
   
    </tr>
    <tr>
      <th scope="row">Temperature in &#8451;</th>
      <td >{this.props.my.temp_c} &#8451; </td>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Feelslike temp in &#8451;</th>
      <td>{this.props.my.feelslike_c} &#8451; </td>
     
    </tr>
    <tr>
      <th scope="row">Temperature in &#8457; </th>
      <td>{this.props.my.temp_f} &#8457;</td>
     
    </tr>
    <tr>
      <th scope="row">Feelslike temp in &#8457;</th>
      <td >{this.props.my.feelslike_f} &#8457;</td>
   
    </tr>
    <tr>
      <th scope="row">last updated</th>
      <td >{this.props.my.last_updated}</td>
   
    </tr>
    <tr>
      <th scope="row">Wind kph</th>
      <td >{this.props.my.wind_kph}km/h</td>
   
    </tr>
    <tr>
      <th scope="row">Wind mph</th>
      <td >{this.props.my.wind_mph}mph</td>
   
    </tr>
    <tr>
      <th scope="row">Humidity</th>
      <td >{this.props.my.humidity}%</td>
   
    </tr>
    
  </tbody>
</table> 


</div>
{/* <div className='col-md-2'></div> */}
<div className='fs-1'> &#9729;</div>
      </div>
    )
  }
}

export default Table
