import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction, ThemeProvider} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

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
            <svg class="item3" style={{
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

                  <path d={lineData} stroke="#55893d" stroke-width="2" fill='none'></path>
            </svg>
            <ButtonGroup className="graph-nav">
              <Button variant="contained" color="secondary" size='large' id="one-day" style={{
                width: '200px',
              }} onClick={() => setLineData("M0,0L998,1998")}>
                <Typography variant='button'>
                  1 Day
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' id="one-week" style={{
                width: '200px',
                
              }} onClick={() => setLineData("M5,30L8,25,L19,98,L56,45L120,20")}>
                <Typography variant='button'>
                  1 Week
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' id="one-month" style={{
                width: '200px',
              }} onClick={() => setLineData("M0,10L40,75,L68,98,L90,145L120,220")}>
                <Typography variant='button'>
                  1 Month
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' id="one-year" style={{
                width: '200px',
              }} onClick={() => setLineData("M100,140L240,275L368,398L490,545L720,920")}>
                <Typography variant='button'>
                  1 Year
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' id="five-years" style={{
                width: '200px',
              }} onClick={() => setLineData("M0,10L40,75,L68,98,L90,145L120,220")}>
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
