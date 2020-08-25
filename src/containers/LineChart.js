import React, { useRef, useEffect, useState} from 'react'
import { select, line, curveCardinal, axisBottom, scaleLinear } from "d3";

const LineChart = () => {
    // this is where we get data for our viz, so how do we connect it to backend?
    const [data, setData] = useState([25, 30, 45, 60, 41, 35, 70, 94, 12, 45]);
    const svgRef = useRef();

    //will be called initially and with every data change that might come from the backend
    useEffect(() => {
        const svg = select(svgRef.current);

        const xScale = scaleLinear()
        .domain([0, data.length - 1])
        .range([0, 300]);

        const yScale = scaleLinear()
        .domain([0, 100])
        .range([150, 0]);

        const xAxis = axisBottom(xScale);
        svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

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
            <path d="M0, 120 125, 150 130, 120" stroke="#88bd40" stroke-width="3px"></path>
        </svg>
    </React.Fragment>
   )
 }

 export default LineChart;