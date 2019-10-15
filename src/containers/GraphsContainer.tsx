import React, { useEffect } from 'react'
// import Chart from 'chart.js'
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

// const Highcharts = require('highcharts/highstock');

const GraphsContainer: React.FC = () => {

  useEffect( () => {
    // chart.js
    // new Chart('canvas-1', {
    //     type: 'bar',
    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //             label: 'Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.5)',
    //                 'rgba(54, 162, 235, 0.5)',
    //                 'rgba(255, 206, 86, 0.5)',
    //                 'rgba(75, 192, 192, 0.5)',
    //                 'rgba(153, 102, 255, 0.5)',
    //                 'rgba(255, 159, 64, 0.5)'
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //       legend: {
    //         // display: false
    //       },
    //         responsive: true,
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }]
    //         }
    //     }
    // });

    // highcharts
    Highcharts.chart({
      chart: {
        renderTo: 'container',
        type: 'pie'
      },
      title: {
        text: 'To Dos!'
      },
      xAxis: {
        categories: ['Completed', 'In Progress']
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [{
        name: 'To Dos',
        data: [1, 1]
      }]
    })
  })


  return(<>
    {/*<div className='main border'>
      <canvas id='canvas-1' width='400' height='400'/>
    </div>*/}
    <div className='main border'>
      <div id="container" style={{width:'100%', height:'400px'}}></div>
    </div>
  </>)
}

export default GraphsContainer