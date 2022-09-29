import React, { Component, useState } from 'react';

export default class Graph extends Component {
  render() {
    const style={width:'50%', margin:'2%'}
    const rawData = require('../data.json')
    const data = JSON.parse(JSON.stringify(rawData))
    var date, curr1,curr2,value;
    
    // const[data,setData]=useState({
    //   labels:data.map((value))=>value[]
    // })
    return (
      <div>
        {value}
      </div>
    )
  }
}
export {Graph}
