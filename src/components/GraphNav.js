import React from 'react';
import GraphItemButton from './GraphItemButton';

const timeframe = [
    {
        name: '1 Day'
    }, 
    {
        name: '1 Week'
    }, 
    {
        name: '1 Month'
    }, 
    {
        name: '1 Year'
    }, 
    {
        name: '5 Years'
    }
]

export default function GraphNav() {
    return(
        <div class="graph-nav">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
            {
                timeframe.map(timeframe => (
                    <GraphItemButton key={timeframe.name} name={timeframe.name}>

                    </GraphItemButton>
                ))
            }
        </div>
    )
}