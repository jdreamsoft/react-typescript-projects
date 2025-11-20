/*

Using React, **create a new project** to do the following:

1. Make the following API call:
    1. Endpoint: https://api.signos.com/portal/get_wf_banner_text
    2. Method: POST
    3. Body (raw text): “METABOLISM”
    4. Parse the field “banner_text” from the response and display as a banner on top of the screen
2. Generate a list of 20 tuples - (x, y) 
    1. x-values starts at 0, increment in 5 eg: 0, 5, 10, ....
    2. y-values randomly between 60 and 180
3. Create a visually appealing chart to display these values:
    1. x axis is time (each data point should be 5 mins apart)
    2. y axis is glucose levels (the 20 values we generated in step 1)

**(If time permits)**

1. Have a y-limit line at 120
2. Above 120, line is red, below, line is blue
3. Color the region below the 120 line to light grey (behind the line)

*/

import React, { Component } from 'react';
import './App.css';
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      banner_text:''
    }
    this.graph_data = [];
    this.back_data = [];
    this.makeGraphData(20);
  }
  makeGraphData(point_numbers = 20){
    for(var i = 0;i< point_numbers;i++){
      var x = i * 5;
      var y = Math.floor(Math.random() * (180- 60)) + 60;
      var color = y > 120 ? 'red':'blue';
      this.graph_data.push({x,y,color, lineColor:color});
      this.back_data.push({x,y:[60, 120]})
    }
    this.options = {
      title: {
        text: "Chart"
      },
      axisY:{
        title:'Glucose',
        minimum:50
      },
      axisX:{
        title:'Time',
        interval:5,
        minimum:0,
      },
      data: [
        {
          type:'rangeArea',
          color:'lightgray',
          dataPoints:this.back_data,
        },
        {
          type: "stepLine",
          dataPoints: this.graph_data
       }
      ]
   }
  }
  async componentDidMount(){
    var requestOptions = {
      method: 'POST',
      body: 'METABOLISM'
    }
    
    const resp = await fetch('https://api.signos.com/portal/get_wf_banner_text', requestOptions);
    const data = await resp.json();
    if (data !== undefined && data !== null && data.banner_text !== undefined){
      this.setState({banner_text:data.banner_text});  
    }
  }
  
  // setColor(chart){
  //   for(var i = 0; i < chart.options.data.length; i++) {
  //     dataSeries = chart.options.data[i];
  //     for(var j = 0; j < dataSeries.dataPoints.length; j++){
  //       if(dataSeries.dataPoints[j].y <= 0)
  //         dataSeries.dataPoints[j].color = 'rgb(170, 0, 0)';
  //     }
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.banner_text}
        </header>
        <p className="App-intro">
          <CanvasJSChart options = {this.options}/>
        </p>
      </div>
    );
  }
}

export default App;
