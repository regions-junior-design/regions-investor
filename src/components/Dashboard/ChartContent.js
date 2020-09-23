import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';


export default function ChartContent(props) {

const data = {
    labels: props.labelsArr,
    datasets: [
      {
        label: 'Account Total Over Time',
        fill: false,
        lineTension: 0.1,
        borderColor: "#528400",
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointBorderColor: "#528400",
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#88bb00",
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: props.dataArr,
      }
    ], 
  };

  const options = {
      scales: {
            yAxes: [
                {
                    ticks: {
                        stepSize: 500,
                        fontColor: 'black',
                        fontSize: 18,
                        padding: 10,
                        fontFamily: "'Helvetica Neue', sans-serif",
                        fontStyle: 'italic',
                    },
                    gridLines: {
                        color: 'grey',
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: 'black',
                        fontSize: 18,  
                        padding: 10,
                        fontFamily: "'Helvetica Neue', sans-serif",
                        fontStyle: 'italic',
                    },
                    gridLines: {
                        color: 'grey',
                    }
                }
            ]
      }, 
      legend: {
        display: true,
        labels: {
            fontColor: 'rgb(0, 0, 0)',
        }
    }
  }
    return(
        <div className="line-chart" style={{
            height: 500,
            width: 1000,
            marginTop: '65px',
        }}>   
            <Line data={data} options={options}></Line>
        </div>
    )
}