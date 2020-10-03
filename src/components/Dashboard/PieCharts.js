import { Typography } from '@material-ui/core';
import React from 'react';
import {Pie} from 'react-chartjs-2';

export default function PieCharts({data, options}) {

    return(
        <div id='pie-chart'>
            <Pie data={data} options={options}></Pie>
        </div>

    )
}