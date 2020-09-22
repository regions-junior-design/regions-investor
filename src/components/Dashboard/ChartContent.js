import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Account Total Over Time',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: "#528400",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
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
        width: 1000,
        data: [13000, 13023, 13212, 14231, 14001, 14568, 14678]
      }
    ]
  };

export default function ChartContent() {
    return(
        <div className="line-chart" style={{
            height: 500,
            width: 1000,
        }}>   
            <Line data={data}></Line>
        </div>
    )
}