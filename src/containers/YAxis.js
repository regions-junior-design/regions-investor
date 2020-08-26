import React, { useRef, useEffect, useState, useMemo } from 'react'
import * as d3 from 'd3';

const YAxis = () => {
//    const ticks = useMemo(() => {
//      const yScale = d3.scaleLinear()
//        .domain([0, 100])
//        .range([10, 290])
//      return yScale.ticks()
//        .map(value => ({
//          value,
//          yOffset: yScale(value)
//        }))
//    }, [])
   return (
     <svg>
       <path
         d="M 0 500 L 0 0"
         stroke="currentColor" stroke-width="5px"
       />
       {/* {ticks.map(({ value, yOffset }) => (
         <g
           key={value}
           transform={`translate(${yOffset}, 0)`}
         >
           <line
             y2="6"
             stroke="currentColor"
           />
           <text
             key={value}
             style={{
               fontSize: "10px",
               textAnchor: "middle",
               transform: "translateY(20px)"
             }}>
             { value }
           </text>
         </g>
       ))} */}
     </svg>
   )
 }

 export default YAxis;