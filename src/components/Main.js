import React from 'react';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';

export default function Main() {

    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <div class="grid-layout">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
            <h1 variant='h1' className="item1">
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
            <ButtonGroup className="graph-nav">
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                1 Day
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                1 Week
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                1 Month
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                1 Year
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                5 Years
              </Button>
            </ButtonGroup>

            {/* <GraphNav></GraphNav> */}

        </div>
        </Container>
      </React.Fragment>

    )
}
