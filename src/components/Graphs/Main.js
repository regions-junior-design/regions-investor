import React from 'react';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction, ThemeProvider, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import SideNav from '../SideNav/SideNav';

export default function Main() {

    return(
        <React.Fragment>
        <CssBaseline />
        <SideNav/>
        <Container maxWidth="sm">
        <div class="grid-layout">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
            <Typography className="item1" variant="h2">
              Regions Financial Wealth Planner
            </Typography>
            <Button variant="contained" color="primary" className="item2">
              <Typography variant='button'>
                  Edit
              </Typography>
            </Button>
            {/* <button class="item2">Edit</button> */}
            <svg class="item3">
                {/* <XAxis></XAxis>
                <YAxis></YAxis>
                <Line></Line> */}
            </svg>
            <ButtonGroup className="graph-nav">
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  1 Day
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  1 Week
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  1 Month
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  1 Year
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  5 Years
                </Typography>
              </Button>
            </ButtonGroup>

            {/* <GraphNav></GraphNav> */}

        </div>
        </Container>
      </React.Fragment>

    )
}
