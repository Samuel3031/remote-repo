import React, { Component } from "react";
import axios from "axios";

async function getlist(){
  const res = await axios({
    url:"http://localhost:8088/user",
    method:"GET"
    
  })  
}


export default class app extends Component {
  render() {
    return (
      <>
        <div>HELLO1</div>
      </>
    );
  }
}
