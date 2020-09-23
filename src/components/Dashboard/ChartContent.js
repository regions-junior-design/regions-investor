import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';



const dataArr = [13000, 13023, 13212, 14231, 14001, 14568, 14678];
const labelsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const [data, setData] = useState(dataArr);
const [labels, setLabels] = useState(labelsArr);

const data = {
    labels: labelsArr,
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
        data: dataArr,
      }
    ], 
  };

  const options = {
      scales: {
            yAxes: [
                {
                    ticks: {
                        stepSize: 500,
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
  
export default function ChartContent() {
    return(
        <div className="line-chart" style={{
            height: 500,
            width: 1000,
        }}>   
            <Line data={data} options={options}></Line>
        </div>
    )
}