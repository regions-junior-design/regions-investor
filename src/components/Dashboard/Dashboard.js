import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { theme } from '../../MaterialUITheme';
import Chart from './Chart';
import RecentTransactions from './RecentTransactions';
import PieCharts from './PieCharts';
import Progress from './Progress';
import InfoIcon from '@material-ui/icons/Info';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  // First Pie Chart data
  const data1 = {
        labels: [
            'Automobile',
            'Travel',
            'Home'
        ],
        datasets: [{
            data: [30, 50, 100],
            backgroundColor: [
            '#47c3d4',
            '#cc4e00',
            '#ffc425'
            ],
            hoverBackgroundColor: [
            '#47c3d4',
            '#cc4e00',
            '#ffc425'
            ]
        }]
    };

  // First Pie Chart Options
  const options1 = {
      legend: {
          position: 'bottom',
          labels: {
              fontSize: 20
          }
      }, 
      title: {
          display: true,
          position: 'top',
          fontSize: 24,
          text: 'Subaccount distribution'
      }
  }

  // Second Pie Chart Data
  const data2 = {
    labels: [
        'New Car',
        'Europe Vacation',
        'Wedding'
    ],
    datasets: [{
        data: [200, 150, 100],
        backgroundColor: [
        '#47c3d4',
        '#cc4e00',
        '#ffc425'
        ],
        hoverBackgroundColor: [
        '#47c3d4',
        '#cc4e00',
        '#ffc425'
        ]
    }]
};

  const options2 = {
    legend: {
      position: 'bottom',
      labels: {
          fontSize: 20
      }
    }, 
    title: {
        display: true,
        position: 'top',
        fontSize: 24,
        text: 'Fund distribution'
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container alignItems="left"> 
            <Grid item xs={9} className="scroll-container"> 
                <Chart/> 
                <div id='pie-chart-area' style={{
                  borderStyle: 'solid',
                  borderColor: "#88bb00",
                  borderWidth: 3,
                  marginLeft: 140,
                  marginTop: 140,
                  borderRadius: '13px',
                  width: 1200,
                  height: 600
                }}>
                <Typography variant='h2' style={{
                  marginLeft: 400,
                  marginBottom: 20,
                  marginTop: 30,
                  backgroundColor: "#528400",
                  padding: 10,
                  width: 410,
                  color: 'white'
                }}>
                  Subaccount Breakdown
                </Typography>
                <Grid container spacing={3} style={{
                  marginTop: 10,
                  width: 950,
                  marginLeft: -60,
                }}>
                  <Grid item sm={6}>
                  <div id='chart-1' style={{
                      height: 800, 
                      width: 800,
                      marginRight: '80px'
                    }}>
                    <PieCharts data={data1} options={options1}/>
                    </div>
                  </Grid>

                  <Grid item sm={6}>
                  <div id="chart-2" style={{
                      height: 800, 
                      width: 800
                    }}>
                      <PieCharts data={data2} options={options2}/>
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant='h2' style={{
                      marginTop: -250,
                      marginLeft: 350,
                    }}>
                      Subaccount Progress Breakdown
                    </Typography>
                    <Typography variant='h6' style={{
                      marginTop: 10,
                      marginLeft: 180, 
                      width: 1000
                    }}><InfoIcon fontSize='medium' style={{
                      marginRight: 10
                    }}></InfoIcon>The progress bars below show you your progress towards your individual subaccount goals.</Typography>
                  </Grid>

                  <Grid item sm={6}>
                    <div style={{
                      marginLeft: 100,
                      marginTop: -100
                    }}>
                      <Typography variant='h4' style={{
                        marginBottom: 10
                      }}>Wedding Progress</Typography>
                      <Progress num="50"></Progress>
                    </div>
                  </Grid>

                  <Grid item sm={6}>
                    <div style={{
                      marginLeft: 200,
                      marginTop: -100
                    }}>
                      <Typography variant='h4' style={{
                        marginBottom: 10
                      }}>Europe Vacation Progress</Typography>
                      <Progress num="70"></Progress>
                    </div>
                  </Grid>

                  <Grid item sm={6}>
                    <div style={{
                      marginLeft: 100,
                      marginBottom: 50
                    }}>
                      <Typography variant='h4' style={{
                        marginBottom: 10
                      }}>New House Progress</Typography>
                      <Progress num="90"></Progress>
                    </div>
                  </Grid>

                  <Grid item sm={6}>
                    <div style={{
                      marginLeft: 200,
                      marginBottom: 50
                    }}>
                      <Typography variant='h4' style={{
                        marginBottom: 10
                      }}>New Car Progress</Typography>
                      <Progress num="20"></Progress>
                    </div>
                  </Grid>

                </Grid>
                </div>


            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}