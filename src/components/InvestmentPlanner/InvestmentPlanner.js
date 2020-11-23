import { Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";
import { theme } from "../../MaterialUITheme";
import { AuthUserContext } from "../Session";
import ETableF from "./FireBaseTable";
import EnhancedTable from './EnhancedTable';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import NewPlan from './NewPlan';
import EditGoalPage from "../SubAccounts/EditGoalPage";
import '../SubAccounts/index.css';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import InfoIcon from '@material-ui/icons/Info';

import Progress from '../Dashboard/Progress';
import PieCharts from '../Dashboard/PieCharts';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { withFirebase } from '../Firebase';
import IndividualPage from '../SubAccounts/IndividualPage';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Individual from './Individual';
import TickerTable from '../SubAccounts/TickerTable';

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

function getPrice(ticker) {
    var myHeaders = new Headers();
    myHeaders.append(
        "x-rapidapi-host",
        "apidojo-yahoo-finance-v1.p.rapidapi.com"
    );
    myHeaders.append(
        "x-rapidapi-key",
        "48219a2373msh1e5a4985aff6ef7p1cf4a7jsn0955b099737b"
    );

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    return fetch(
        `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=${ticker}&region=US`,
        requestOptions
    )
        .then((response) => response.json())
        .then(
            (result) =>
                (result.quoteResponse.result[0].bid +
                    result.quoteResponse.result[0].ask) /
                2
        )
        .catch((error) => console.log("error", error));
}

  function InvestmentPlanner(props) {
    const classes = useStyles();
    const [view, setView] = useState("Dashboard");
    const [num, setNum] = useState(0);
    const [del, setDelete] = useState(0);
    const [chosen, setChosen] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [select, setSelect] = useState([]);
    const [table, setTable] = useState([]);

    const handleMain = () => {
        setChosen(false)
        setView("MainPage");
        setNum(0);
    }

    const handleNewGoal = () => {
        setView("NewGoal");
        setNum(1);
    }

    const handleIndividual = () => {
        if (chosen) 
        {setView("Individual");
        setNum(3);
        }
    }
    
    const handleDelete = () => {
        setDelete(del + 1);
        console.log(del);
    };

    const handleClickOpen = () => {
        if (chosen) setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSelected = (selected) => {
        console.log("is elected" + selected);
        setChosen(selected.length != 0);
        setSelect(selected);
    };

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={classes.content}>
        <div>
            {num === 0 ? (
               <div>
               {/* <Heading></Heading> */}
               <Container
                   maxWidth="lg"
                   className={classes.container}
               >
                   <Grid item xs={12} md={8} lg={9}>
                       <AuthUserContext.Consumer>
                           {(authUser) => (
                               <div>
                                   <Button
                                       variant="contained"
                                       className="tooltip"
                                       style={{
                                           marginBottom: 20,
                                           backgroundColor:
                                               "#528400",
                                           color: "white",
                                       }}
                                       onClick={handleNewGoal}
                                   >
                                       {" "}
                                       <AddIcon fontSize="medium"></AddIcon>
                                       <Typography className="tooltiptext">
                                           New Investment Plan
                                       </Typography>
                                   </Button>
                                   <Button
                                       variant="contained"
                                       className="tooltip"
                                       onClick={handleClickOpen}
                                       style={{
                                           marginBottom: 20,
                                           backgroundColor:
                                               "#528400",
                                           color: "white",
                                           marginLeft: 20,
                                       }}
                                   >
                                       <EditIcon fontSize="medium"></EditIcon>
                                       <Typography className="tooltiptext">
                                           Edit Investment Plan
                                       </Typography>
                                   </Button>
                                   <PopupState variant="popover" popupId="demo-popup-menu">
                                    {(popupState) => (
                                    <React.Fragment>
                                        {/* TRINH THIS IS THE BUTTON TO TAKE YOU TO THE INDIVIDUAL PAGE */}
                                    <Button variant='contained' color='primary' style={{
                                        marginLeft: 20,
                                        marginTop: -10
                                    }} className='tooltip' onClick={handleIndividual}>
                                        <Typography className='tooltiptext'>Individual Info</Typography>
                                        <InfoIcon fontSize='medium'></InfoIcon>
                                        </Button>
                                    </React.Fragment>
                                    )}
                                </PopupState>
                                   <Dialog
                                       open={open}
                                       onClose={handleClose}
                                       aria-labelledby="form-dialog-title"
                                   >
                                       <DialogTitle id="form-dialog-title">
                                           Edit Investment Plan
                                       </DialogTitle>
                                       <DialogContent>
                                           <DialogContentText>
                                               You can edit any
                                               part of your investment plan.
                                           </DialogContentText>
                                           <EditGoalPage
                                               authUser={authUser}
                                               selected={select}
                                               back={handleClose}
                                           ></EditGoalPage>
                                       </DialogContent>
                                       <DialogActions>
                                           <Button
                                               onClick={
                                                   handleClose
                                               }
                                               color="primary"
                                           >
                                               Cancel
                                           </Button>
                                       </DialogActions>
                                   </Dialog>
                                   <Button
                                       variant="contained"
                                       className="tooltip"
                                       style={{
                                           marginBottom: 20,
                                           backgroundColor:
                                               "#528400",
                                           color: "white",
                                           marginLeft: 20,
                                       }}
                                       onClick={handleDelete}
                                   >
                                       <DeleteIcon fontSize="medium"></DeleteIcon>
                                       <Typography className="tooltiptext">
                                           Delete
                                       </Typography>
                                   </Button>

                                   <ETableF
                                       authUser={authUser}
                                       del={del}
                                       onSelected={onSelected}
                                   />
                               </div>
                           )}
                       </AuthUserContext.Consumer>
                   </Grid>
               </Container>
           </div>
       ) : (
           <div></div>
       )} {num === 1 ? (
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
                    <NewPlan authUser={authUser} back={handleMain} back={handleMain}/>
                    </div>
                )}
            </AuthUserContext.Consumer>
            </Grid>
            </Container>
            </div>
    ) : (
        <div></div>
    )}
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
                    {/* <Individual></Individual> */}
                    <TickerTable authUser={authUser} rows={table}>
                                    {" "}
                                </TickerTable>
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

export default withFirebase(InvestmentPlanner);
