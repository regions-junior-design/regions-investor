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
import IconScroller from './IconScroller';
import RecentTransactions from './RecentTransactions';

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

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item lg={0} />
        <Grid item xs={12} sm={12} md={8} lg={4}>
          <News></News>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={4}>
        <RecentTransactions></RecentTransactions>
        </Grid>
        <Grid item lg={1} />
      </React.Fragment>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container alignItems="center"> 
            <Grid item lg={0} /> 
            <Grid item lg={8} className="scroll-container"> 
                <Chart /> 
                {/* <IconScroller></IconScroller> */}
                <Grid container item Spacing={0}>
                  <FormRow>
                  </FormRow>
                </Grid>
            </Grid>
            <Grid item lg={0} />
          </Grid> *
        </Container>
      </main>
    </ThemeProvider>
  );
}