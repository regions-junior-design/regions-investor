import React, {Component, useState, useEffect} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';

// Here is a basic example chart, you can use this as a template to create more!

const Chart = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['Car', 'Mortgage', 'Insurance'],
            datasets: [
                {
                    label: 'percent invested',
                    data: [1/3, 1/3, 1/3],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(23, 45, 132, 0.6)',
                        'rgba(130, 20, 125, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

useEffect(() => {
    chart()
}, [])

    return(
        <div className="App">
            <h1>Chart</h1>
            <div style={{height: "600px", width: "600px"}}>
                <Pie data={chartData} options={{
                    responsive: true
                }}>
                    
                </Pie>
            </div>
        </div>
    )
}

export default Chart;