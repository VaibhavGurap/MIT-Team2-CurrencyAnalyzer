import React, { Component } from 'react';
import Trend from 'react-trend';

export default class Graph extends Component {
  render() {
    const style={width:'50%', margin:'2%'}
    return (
      <div>
        <Trend style={style}
        data={[0, 10, 5, 22, 3.6, 11]} 
        autoDraw
        autoDrawDuration={1000}
        autoDrawEasing="ease-in"/>
      </div>
    )
  }
}
export {Graph}
