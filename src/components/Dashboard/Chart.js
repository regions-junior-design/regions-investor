import { Button, ButtonGroup, Container, CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ChartContent from './ChartContent';

// ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export default function Chart() {
  const theme = useTheme();

  const [xAxis, setXAxis] = React.useState(['12am', '6am', '12pm', '6pm', '12am']);

  return (
<React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <div class="grid-layout">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
            
            <Typography className="item1" variant="h1" style={{
            }}>
              Dashboard
            </Typography>
            {/* <Button variant="contained" color="primary" className="item2">
              <Typography variant='button' style={{
                marginTop: 11,
              }}>
                  Edit
              </Typography>
            </Button> */}

              <ChartContent style={{
                marginTop: 500
              }} labelsArr= {xAxis} dataArr={[13000, 13023, 13212, 14231, 14001, 14568, 14678]}></ChartContent>

                <ButtonGroup className="graph-nav" style={{
                  marginTop: 520
                }}>
                  <Grid container> 
                    <Grid item> 
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }} onClick={(xAxis) => setXAxis(['12am', '6am', '12pm', '6pm', '12am'])}>
                        <Typography variant='button'>
                          1 Day
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }} onClick={(xAxis) => setXAxis(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])}>
                        <Typography variant='button'>
                          1 Week
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item> 
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }} onClick={(xAxis) => setXAxis(['1st', '5th', '10th', '15th', '20th', '25th', '30th'])}>
                        <Typography variant='button'>
                          1 Month
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item> 
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }} onClick={(xAxis) => setXAxis(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])}>
                        <Typography variant='button'>
                          1 Year
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item> 
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }} onClick={(xAxis) => setXAxis(['2016', '2017', '2018', '2019', '2020'])}>
                        <Typography variant='button'>
                          5 Years
                        </Typography>
                      </Button>
                  </Grid>
                </Grid>
                </ButtonGroup>

            {/* <GraphNav></GraphNav> */}

        </div>
        </Container>
      </React.Fragment>
  );
}
