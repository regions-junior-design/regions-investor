import React, { useRef, useEffect, useState} from 'react'
import { select, line, curveCardinal } from "d3";

const LineChart = () => {
    // this is where we get data for our viz, so how do we connect it to backend?
    const [data, setData] = useState([25, 30, 45, 60]);
    const svgRef = useRef();

    //will be called initially and with every data change that might come from the backend
    useEffect(() => {
        const svg = select(svgRef.current);
        const myLine = line()
        .x((value, index) => index * 50)
        .y(value => value)
        .curve(curveCardinal);

        svg.selectAll("path").data([data]).join("path").attr("d", value => myLine(value)).attr("fill", "none");
    }, [data]);


   return (
    <React.Fragment>
        <svg ref={svgRef}>
            <path d="M0, 120 125, 150 130, 120" stroke="green"></path>
        </svg>
    </React.Fragment>
   )
 }

 export default LineChart;