import React from 'react';
import Chart from '../containers/Chart';
import { Line } from 'react-chartjs-2';
import YAxis from '../containers/YAxis';
import XAxis from '../containers/XAxis';
import GraphNav from './GraphNav';

export default function Main() {
    return(
        <div class="grid-layout">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
            <h1 class="item1">
                Regions Financial Wealth Planner
            </h1>
            <button class="item2">Edit</button>
            <svg class="item3">
                {/* <XAxis></XAxis>
                <YAxis></YAxis>
                <Line></Line> */}
            </svg>
            <GraphNav></GraphNav>

        </div>
    )
}