import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';
import { Paper } from '@material-ui/core';
import {theme} from '../../MaterialUITheme';
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
                <div id='chart-container' style={{
                  display: 'inline-block'
                }}>
                  <div id='chart-1' style={{
                      height: 900, 
                      width: 900
                    }}>
                    <PieCharts data={data1} options={options1}/>
                    </div>

                    <div id="chart-2" style={{
                      height: 900, 
                      width: 900
                    }}>
                      <PieCharts data={data2} options={options2}/>
                    </div>
                </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}