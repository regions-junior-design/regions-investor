import React, { useRef, useEffect, useState, useMemo } from 'react'
import * as d3 from 'd3';

const XAxis = () => {
  //  const ticks = useMemo(() => {
  //    const xScale = d3.scaleLinear()
  //      .domain([0, 100])
  //      .range([10, 500])
  //    return xScale.ticks()
  //      .map(value => ({
  //        value,
  //        xOffset: xScale(value)
  //      }))
  //  }, [])
   return (
     <svg>
       <path
         d="M 0 498 H 1000"
         stroke="black" stroke-width="3px"
       />
       {/* {ticks.map(({ value, xOffset }) => (
         <g
           key={value}
           transform={`translate(${xOffset}, 300)`}
         >
           <line
             y2="6"
             stroke="black"
           />
           <text
             key={value}
             style={{
               fontSize: "10px",
               textAnchor: "middle",
             }}>
             { value }
           </text>
         </g>
       ))} */}
     </svg>
   )
 }

 export default XAxis;