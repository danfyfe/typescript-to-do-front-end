import React, { useEffect } from 'react'
import { ToDo } from '../interfaces/ToDoInterfaces'
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
// const Highcharts = require('highcharts/highstock');

const GraphsContainer: React.FC<{toDos: ToDo[]}> = props => {
  const { toDos } = props

  useEffect( () => {
    // create an object to keep track of completed and inProg status
    const toDoProgObj = { completed: 0, inProg: 0 }

    // go through list of to dos, look at completed, update total of completed and inProg
    toDos.forEach( toDo => {
      if( toDo.completed === true){
        toDoProgObj.completed ++
      } else {
        toDoProgObj.inProg ++
      }
    })

    // find percentage of completed and inProg to plug into y value
    const completedPer = toDoProgObj.completed / toDos.length * 100

    const inProgPer = toDoProgObj.inProg / toDos.length * 100

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
      series: [{
        name: 'To Dos',
        colorByPoint: true,
        data: [{
          name: 'Completed',
          y: completedPer
        },
        {
          name: 'In Prog',
          y: inProgPer
        }]
      }]
    })

  })


  return(<>
    <div className='main border'>
      <div id="container" style={{width:'100%', height:'400px'}}></div>
    </div>
  </>)
}

export default GraphsContainer







// below is for char.js - switched to Highcharts

/*<div className='main border'>
<canvas id='canvas-1' width='400' height='400'/>
</div>*/
// import Chart from 'chart.js'

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