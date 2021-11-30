import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      address:"",
      phone:"",
      email:"",
    results:{}
    }
  }
  handleonChange=(event)=> {
    this.setState({name:event.target.value});
  }
  handleonChangeAddress=(event)=> {
    this.setState({address:event.target.value});
  }
  handleonChangePhone=(event)=> {
    this.setState({phone:event.target.value});
  }
  handleonChangeEmail=(event)=> {
    this.setState({email:event.target.value});
  }
handleButtonOnClick=()=>{
  const result={
    name:this.state.name,
    address:this.state.address,
    phone:this.state.phone,
    email:this.state.email,
  }
  this.setState({results:result});
}
render(){
  return(
    <React.Fragment>
      <div className="main">
        Name<input className="Name" type="text"  value={this.state.name} onChange={this.handleonChange}/>
        Address<input className="Address" type="text" value={this.state.address} onChange={this.handleonChangeAddress}/>
        Phone<input className="Phone" type="number" size="10" value={this.state.phone} onChange={this.handleonChangePhone}/>
        Email<input className="Email" type="email" value={this.state.email} onChange={this.handleonChangeEmail}/>
      
      <button onClick={this.handleButtonOnClick}>SUBMIT</button>
      {
        Object.keys(this.state.results).length ? JSON.stringify(this.state.results):null
      }
      </div>
    </React.Fragment>
  )
  }
}



export default App;