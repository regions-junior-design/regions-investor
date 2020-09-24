import React, { useState }from 'react';
import EnhancedTable from './EnhancedTable';
import Heading from './Heading';
import {Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './index.css';
import { Add } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import NewGoalPage from './NewGoalPage';
import { AuthUserContext } from '../Session';
import ETableF from './FireBaseTable'

import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from '../../MaterialUITheme'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
        width: '100vw',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function SubAccounts() {
    const classes = useStyles();
    const [view, setView] = useState("Dashboard");
    const [num, setNum] = useState(0);
    
    const handleMain = () => {
        setView("MainPage");
        setNum(0);
    }

    const handleNewGoal = () => {
        setView("NewGoal");
        setNum(1);
    }
    
    return (
        <div>
            {num === 0 ? (
                <div>
                    <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <main className={classes.content}>
                    <Heading></Heading>
                    <Container maxWidth="lg" className={classes.container}>
                    <Grid item xs={12} md={8} lg={9}>
                    <AuthUserContext.Consumer>
                        {authUser => (
                            <div>
                                <Button variant='contained' className="tooltip" style={{
                                    marginBottom: 20,
                                    backgroundColor: "#528400",
                                    color: 'white',
                                }} onClick={handleNewGoal}> <AddIcon fontSize='medium'></AddIcon>
                                    <Typography className="tooltiptext">Add Goal</Typography>
                                </Button>
                                <Button variant='contained' className="tooltip" style={{
                                    marginBottom: 20,
                                    backgroundColor: "#528400",
                                    color: 'white',
                                    marginLeft: 20
                                }}>
                                    <EditIcon fontSize='medium'></EditIcon>
                                    <Typography className="tooltiptext">Edit Goal</Typography>
                                </Button>
                                <ETableF authUser={authUser}/>
                            </div>
                        )}
                    </AuthUserContext.Consumer>
                    </Grid>
                    </Container>
                    </main>
                    </ThemeProvider>
                </div>
                ) : (
              <     div></div>
                )
            }   
          {num === 1 ? (
              <div>
                    <AuthUserContext.Consumer>
                        {authUser => (
                            <div>
                            <Button onClick={handleMain} variant="contained" style={{
                                backgroundColor: "#528400",
                                color: 'white',  
                            }}>Cancel</Button>
                            <NewGoalPage></NewGoalPage>
                            </div>
                        )}
                    </AuthUserContext.Consumer>
              </div>
          ) : (
              <div></div>
          )
          }  
        </div>
    )
}


    
      

