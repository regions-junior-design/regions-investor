import React, { useRef, useEffect, useState} from 'react'
import { select, line, curveCardinal, axisBottom, scaleLinear } from "d3";

const Line = () => {
    // ^ normally {arrayDat} would go in the parens
    // this is where we get data for our viz, so how do we connect it to backend?

    // this below shows how we can pass in a variable to the useState method. This array can change based on data changed in the backend. s
    //var arrayDat = {arrayDat};
    var arrayDat = [125, 230, 345, 260, 441, 335, 170, 294, 312, 145];
    const [data, setData] = useState(arrayDat);
    const svgRef = useRef();

    //will be called initially and with every data change that might come from the backend
    useEffect(() => {
        const svg = select(svgRef.current);

        const xScale = scaleLinear()
        .domain([0, data.length - 1])
        .range([0, 1000]);

        const yScale = scaleLinear()
        .domain([0, 1000])
        .range([0, 1000]);
        
        const myLine = line()
        .x((value, index) => xScale(index))
        .y(yScale)
        .curve(curveCardinal);

        svg.selectAll("path")
        .data([data])
        .join("path")
        .attr("d", myLine)
        .attr("fill", "none");

    }, [data]);

   return (
    <React.Fragment>
        <svg ref={svgRef}>
            <path d="M0, 300 300, 450 600, 995" stroke="#88bd40" stroke-width="3px"></path>
        </svg>
    </React.Fragment>
   )
 }

 export default Line;