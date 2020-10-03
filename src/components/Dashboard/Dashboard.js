import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';
import { Paper } from '@material-ui/core';
import {theme} from '../../MaterialUITheme';
import {Typography} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/core/styles';
import News from './News';
import RecentTransactions from './RecentTransactions';
import PieCharts from './PieCharts';

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
                <Typography variant='h2' style={{
                  marginLeft: 530,
                  marginTop: 120,
                  borderStyle: 'solid',
                  borderColor: "#88bb00",
                  borderWidth: 20,
                  padding: 10,
                  width: 450
                }}>
                  Subaccount Breakdown
                </Typography>
                <Grid container spacing={3} style={{
                  marginTop: 10,
                  width: 950
                }}>
                  <Grid item sm={6}>
                  <div id='chart-1' style={{
                      height: 800, 
                      width: 800
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

                </Grid>


            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}