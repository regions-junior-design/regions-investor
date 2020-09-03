import React, {useRef, useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction, ThemeProvider} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import * as d3 from 'd3';

export default function Chart() {
  const theme = useTheme();

  const [lineData, setLineData] = useState();

  return (
<React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <div class="grid-layout">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
            <Typography className="item1" variant="h2">
              Dashboard
            </Typography>
            <Button variant="contained" color="primary" className="item2">
              <Typography variant='button'>
                  Edit
              </Typography>
            </Button>
            {/* <button class="item2">Edit</button> */}
            <svg id="svg" class="item3" style={{
                  height: '350px',
                  width: '1000px',
                  border: 'solid',
                  color: '#88bd40',
                  marginBottom: '20px',
                  borderRadius: '13px',
            }}>
                  <text textAnchor="middle" x="200" y="55" style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    fill: '#88bd40',
                  }}>Total Account Value:</text>
                  <text textAnchor="middle" x="200" y="105" style={{
                    fontSize: '40px',
                    fill: '#55893d',
                  }}> $18,345.78 </text>
                  <text textAnchor="middle" x="200" y="135" style={{
                    fontSize: '20px',
                    fill: '#88bd40',
                  }}> (+3.89%) </text>
                  
                  <path id="path" d={lineData} stroke="#55893d" stroke-width="2" fill='none'></path>
            </svg>
            <ButtonGroup className="graph-nav">
              <Button variant="contained" color="secondary" size='large' id="one-day" style={{
                width: '200px',
              }} onClick={() => setLineData("M0,350L50,312L100,323L350,220L450,230L500,315L600,230L650,320L700,212L750,130L800,279L850,317L900,243L950,150L1000,75")}>
                <Typography variant='button'>
                  1 Day
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' id="one-week" style={{
                width: '200px',
                
              }} onClick={() => setLineData("M0,350L50,312L200,312L350,220L450,230L500,315L600,230L650,320L700,212L750,130L800,279L850,317L900,243L950,150L1000,75")}>
                <Typography variant='button'>
                  1 Week
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' id="one-month" style={{
                width: '200px',
              }} onClick={() => setLineData("M0,350L50,312L100,323L350,220L450,230L500,315L650,320L700,212L750,230L800,279L850,317L900,243L950,150L1000,75")}>
                <Typography variant='button'>
                  1 Month
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' id="one-year" style={{
                width: '200px',
              }} onClick={() => setLineData("M0,350L50,312L100,323L350,220L450,230L500,315L600,230L650,320L700,212L750,130L950,150L1000,75")}>
                <Typography variant='button'>
                  1 Year
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' id="five-years" style={{
                width: '200px',
              }} onClick={() => setLineData("M0,350L50,312L100,323L350,220L450,230L500,315L800,279L850,317L900,243L950,150L1000,75")}>
                <Typography variant='button'>
                  5 Years
                </Typography>
              </Button>
            </ButtonGroup>

            {/* <GraphNav></GraphNav> */}

        </div>
        </Container>
      </React.Fragment>
  );
}
