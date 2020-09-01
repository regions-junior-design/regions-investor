import React from 'react';
// import GraphNav from './GraphNav';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction, ThemeProvider } from '@material-ui/core';

export default function Main() {

    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <div class="grid-layout">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
            <h1 className="item1">
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

            {/* <GraphNav></GraphNav> */}

        </div>
        </Container>
      </React.Fragment>

    )
}
