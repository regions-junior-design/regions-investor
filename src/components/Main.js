import React from 'react';
import Chart from '../containers/Chart';
import { Line } from 'react-chartjs-2';
import YAxis from '../containers/YAxis';
import XAxis from '../containers/XAxis';
import GraphNav from './GraphNav';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { color } from 'd3';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Main() {

    const classes = useStyles();

    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <div class="grid-layout">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
            <h1 class="item1">
                Regions Financial Wealth Planner
            </h1>
            <Button variant="contained" color="primary" className="item2">
                Edit
            </Button>
            {/* <button class="item2">Edit</button> */}
            <svg class="item3">
                {/* <XAxis></XAxis>
                <YAxis></YAxis>
                <Line></Line> */}
            </svg>
     
            {/* <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group" className={classes.root}>
              <Button>1 Day</Button>
              <Button>1 Week</Button>
              <Button>1 Month</Button>
              <Button>1 Year</Button>
              <Button>5 Years</Button>
            </ButtonGroup> */}

            <GraphNav></GraphNav>

        </div>
        </Container>
      </React.Fragment>

    )
}