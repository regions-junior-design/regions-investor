import { Typography } from '@material-ui/core';
import React from 'react';
import {Pie} from 'react-chartjs-2';

export default function PieCharts() {

    const data = {
        labels: [
            'Automobile',
            'Travel',
            'Home'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#47c3d4',
            '#cc4e00',
            '#ffc425'
            ],
            hoverBackgroundColor: [
            '#47c3d4',
            '#cc4e00',
            '#ffc425'
            ]
        }]
    };

    const options = {
        legend: {
            position: 'bottom',
            labels: {
                fontSize: 20
            }
        }, 
        title: {
            display: true,
            position: 'top',
            fontSize: 24,
            text: 'Subaccount distribution'
        }
    }


    return(
        <div id='pie-charts' style={{
            marginTop: '65px',
        }}>
            <Pie data={data} options={options}></Pie>
        </div>

    )
}