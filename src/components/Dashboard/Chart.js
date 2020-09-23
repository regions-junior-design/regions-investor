import React, {useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ChartContent from './ChartContent';

// ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export default function Chart() {
  const theme = useTheme();

  const [xAxis, setXAxis] = React.useState(['8am', '9am', '10am']);

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
            <Button variant="contained" color="primary" className="item2">
              <Typography variant='button' style={{
                marginTop: 11,
              }}>
                  Edit
              </Typography>
            </Button>

              <ChartContent style={{
                marginTop: 500
              }} labelsArr= {xAxis} dataArr={[13000, 13023, 13212, 14231, 14001, 14568, 14678]}></ChartContent>

                <ButtonGroup className="graph-nav" style={{
                  marginTop: 470
                }}>
                  <Grid container> 
                    <Grid item> 
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }}>
                        <Typography variant='button'>
                          1 Day
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }}>
                        <Typography variant='button'>
                          1 Week
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item> 
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }}>
                        <Typography variant='button'>
                          1 Month
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item> 
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }}>
                        <Typography variant='button'>
                          1 Year
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item> 
                      <Button variant="contained" color="primary" size='large' className="graph-button-individual" style={{
                        paddingTop: 15,
                      }}>
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
