import React, { useState }from 'react';
import EnhancedTable from './EnhancedTable';
import Heading from './Heading';
import {Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './index.css';
import { Add, More } from '@material-ui/icons';
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import InfoIcon from '@material-ui/icons/Info';

import Progress from '../Dashboard/Progress';
import PieCharts from '../Dashboard/PieCharts';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { withFirebase } from '../Firebase';
import IndividualPage from './IndividualPage';


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

// const IndividualPage = ({name, chartInfo, total}) => {
//     return(
//       <div>
//           <Grid container spacing={3} alignItems='center'>

//               <Grid item xs={12} style={{
//                   marginLeft: 500,
//               }}>
//                 <Typography variant='h1'>{name}</Typography>
//               </Grid>

//               <Grid item xs={12} style={{
//                   marginLeft: 490,
//                   marginTop: 10
//               }}>
//                 <Typography variant='h3' style={{
//                     borderStyle: 'solid', 
//                     borderColor: "#88bb00",
//                     borderWidth: 10,
//                     padding: 10,
//                     width: 460
//                 }}>Total Subaccount Value: ${total}</Typography>
//               </Grid>

//               <Grid item xs={12} style={{
//                   marginLeft: 610,
//                   marginTop: -10
//               }}>
//                   <Typography variant='h4'>Progress to Goal: $23,500</Typography>
//               </Grid>

//               <Grid item xs={12} style={{
//                   marginLeft: 470,
//                   marginTop: -10
//               }}>
//                 <Progress num="60"></Progress>
//               </Grid>

//               <Grid item xs={12} style={{
//                   marginTop: 10,
//                   marginLeft: 300
//               }}>
//                 <div style={{
//                         height: 800, 
//                         width: 800
//                         }}>
//                 <PieCharts data={data1} options={options1}></PieCharts>
//                 </div>
//               </Grid>
//           </Grid>
//     </div>
//     )
//   }

//     // First Pie Chart data
//     const data1 = {
//         labels: [
//             'GOOG',
//             'SBUX',
//             'EFX'
//         ],
//         datasets: [{
//             data: [30, 50, 20],
//             backgroundColor: [
//             '#47c3d4',
//             '#cc4e00',
//             '#ffc425'
//             ],
//             hoverBackgroundColor: [
//             '#47c3d4',
//             '#cc4e00',
//             '#ffc425'
//             ]
//         }]
//     };

//   // First Pie Chart Options
//   const options1 = {
//       legend: {
//           position: 'bottom',
//           labels: {
//               fontSize: 20
//           }
//       }, 
//       title: {
//           display: true,
//           position: 'top',
//           fontSize: 24,
//           text: 'Distribution of funds'
//       }
//   }

  function SubAccounts(props) {
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

    const handleIndividual = () => {
        setView("Individual");
        setNum(3);
    }
    
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={classes.content}>
        <div>
            {num === 0 ? (
                <div>
                    {/* <Heading></Heading> */}
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

                                <PopupState variant="popover" popupId="demo-popup-menu">
                                    {(popupState) => (
                                    <React.Fragment>
                                    <Button {...bindTrigger(popupState)} variant='contained' color='primary' style={{
                                        marginLeft: 20,
                                        marginTop: -10
                                    }} className='tooltip'>
                                        <Typography className='tooltiptext'>Individual Subaccount Info</Typography>
                                        <InfoIcon fontSize='medium'></InfoIcon>
                                        </Button>
                                        <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={handleIndividual}>{authUser.name}</MenuItem>
                                        <MenuItem onClick={handleIndividual}>{authUser.name}</MenuItem>
                                        <MenuItem onClick={handleIndividual}>{authUser.name}</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                    )}
                                </PopupState>


                                <ETableF authUser={authUser}></ETableF>
                            </div>
                        )}
                    </AuthUserContext.Consumer>
                    </Grid>
                    </Container>
                </div>
                ) : (
              <     div></div>
                )
            }   
          {num === 1 ? (
              <div>
                    <Container maxWidth="lg" className={classes.container}>
                    <Grid item xs={12} md={8} lg={9}>
                    <AuthUserContext.Consumer>
                        {authUser => (
                            <div>
                            <Button onClick={handleMain} variant="contained" style={{
                                backgroundColor: "#528400",
                                color: 'white',  
                            }}>Cancel</Button>
                            <NewGoalPage authUser={authUser} back={handleMain}/>
                            </div>
                        )}
                    </AuthUserContext.Consumer>
                    </Grid>
                    </Container>
              </div>
          ) : (
              <div></div>
          )
          }
          {num === 2 ? (
              <div>
                    <Container maxWidth="lg" className={classes.container}>
                    <Grid item xs={12} md={8} lg={9}>
                    <AuthUserContext.Consumer>
                        {authUser => (
                            <div>
                            <Button onClick={handleMain} variant="contained" style={{
                                backgroundColor: "#528400",
                                color: 'white',  
                            }}>Cancel</Button>
                            </div>
                        )}
                    </AuthUserContext.Consumer>
                    </Grid>
                    </Container>
                </div>
          ) : (
              <div></div>
          )
          }  
          {num == 3 ? (
              <div>
                    <AuthUserContext.Consumer>
                    {authUser => (
                        <div>
                            <Button onClick={handleMain} variant="contained" style={{
                                backgroundColor: "#528400",
                                color: 'white',  
                                marginLeft: 20, 
                                marginTop: 20
                            }}><KeyboardBackspaceIcon fontSize='medium'></KeyboardBackspaceIcon></Button>
                        <IndividualPage name='firebase name' total='20,137'></IndividualPage>
                        </div>
                    )}
                    </AuthUserContext.Consumer>
                  </div>
          ) : (
            <div></div>
          )
          }
        </div>
        </main>
        </ThemeProvider>
    )
}

export default withFirebase(SubAccounts);

    
      

