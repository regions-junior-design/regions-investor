import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import FindInPageIcon from '@material-ui/icons/FindInPage';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ViewListIcon from '@material-ui/icons/ViewList';
import clsx from 'clsx';
import React, { useState, useMemo } from 'react';
import { theme } from '../../MaterialUITheme';
import AccountPage from '../Account';
import SignOut from '../SignOut';
import SubAccounts from '../SubAccounts/SubAccounts';
import Dashboard from './Dashboard';
import Transfer from '../Transfer';
import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import InvestmentPlanner from '../InvestmentPlanner/InvestmentPlanner';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
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
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
}));

function Platform(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const [view, setView] = useState("Dashboard");
  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);
  const directLine = useMemo(() => createDirectLine({ token: 'F7mmXekznYI.vrL0a6KbKB0OK0PiSkuLlkjXCdwgLQACS2ir1WBMSus' }), []);
  const styleOptions = {
    bubbleBackground: "#528400",
    botAvatarInitials: "Bank",
    userAvatarInitials: "User",
    userAvatarBackgroundColor: "#88bb00",
    bubbleTextColor: 'white',
    showAvatarInGroup: true, // Or 'sender' or true (on every activity).
    botAvatarBackgroundColor: "#88bb00",
    bubbleFromUserBorderRadius: 10,
    bubbleBorderRadius: 10,
    rootHeight: '700px',
    rootWidth: '100%',
  };

  props.firebase.mainAccounts(props.authUser.uid).once('value').then( v => {
    let sum = 0;
    let acc = v.val();
    // console.log(acc);
    for(var value in acc){
      // console.log(acc[value])
      sum += acc[value].currentAccountValue;
    }
    setTotal(sum);
  })

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleDashboard= () => {
    setView("Dashboard");
    setNum(0);
  }

  const handleAccounts = () => {
    setView("Accounts");
    setNum(1);
  }

  const handleTransactions = () => {
    setView("Transactions");
    setNum(2);
  }

  const handleTransfer = () => {
    setView("Transfer");
    setNum(3);
  }

  const handleHelp = () => {
    setView("Help");
    setNum(4);
  }

  const handleAccountDetails = () => {
    setView("AccountDetails");
    setNum(5);
  }

  const handleSettings= () => {
    setView("Settings");
    setNum(6);
  }

  const handleInvestmentPlan = () => {
    setView("InvestmentPlanner");
    setNum(7);
  }

  // comma separation function
  function commaSeparation(num) {
    var nfObject = new Intl.NumberFormat('en-US');
    var n = nfObject.format(num);
    return n;
  }


    return (
      
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                        <MenuIcon />
                    </IconButton>
                    {/* <img src="https://lh3.googleusercontent.com/kPTc1uhV8RQn_JOrTFBIbHXznvmZKvmfupQ7vVFUj_VyLhRWc7IpXPEL15m_kU5udvWK43o30zHDQkbV2-XKkNko886I2haSalGqL2jWvQpkmfXQ0GgIGFqXzEtCKAASHtVzbGdxE2LMR5lBLr4YWoIbieqh8HOwh8LrUpmJGD8DBEvFt-M4uxuiRKj0YVpCO5X6ZClvEYZB5RcWmcQRLoLUXG_q-0rep2pQi1hKPjlq1t33-f6mewRqooBJ75KdFlliFdpwSY-W9aY7dahX7Tg0wWAnnnQ3-7lWdzFafpGpc622spiO19S9e2RNMCPazzXm3T-dzvcQJ3R9W_qWbyIbgZF29kyFkVH-w1rLbiT7pjSMTiLEDH6zri78uY5mM-2M1bRH0TZrDPKHU_J3E9EsoZ2FdkcxDBiTKLNxoSdNW4kY0CwaKhskRoRYYpz1bXF5LeVT7NLoOZ7Pm0a71TfFO4ey5OkRusw5sA8uZNuIKJhHUDafdJuI62Cif-o_hUdMr8sqwLgn89cXOODcNfcr0XF0UXhR8QkoKnqXtCbQ609tFkdk5iDRB0JpjpN44agPxHadDnYkGCMoPWJV2fKIiu1yGRkCMr9YoxixVRuN4_urTunqSlAX3o1BS0mAhvKzcfC1rKCxOpbJOVAVo3gekAtdXHjdlzx5WwHOx-YvsnYY-v40_o409Bq01g=w446-h327-no?authuser=0" style={{
                          marginLeft: 3,
                          marginTop: 3,
                          marginRight: 5,
                          height: 50,
                          width: 70
                        }}></img> */}
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Personal Investment Platform 
                    </Typography>
                    <SignOut></SignOut>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
                >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                  <dl></dl>
                    <List>
                    <Typography component="h1" variant="h6" color="inherit" align="center" noWrap className={classes.title}>
                        Total Account Value
                    </Typography>
                    <Typography component="h1" variant="h6" color="primary" align="center" noWrap className={classes.title}>
                        ${commaSeparation(total)}
                    </Typography>
                    <dl></dl>
                    <hr></hr>
                        <ListItem button onClick={handleDashboard}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button onClick={handleAccounts}>
                            <ListItemIcon>
                                <ViewListIcon />
                            </ListItemIcon>
                            <ListItemText primary="Goals" />
                        </ListItem>
                        <ListItem button onClick={handleTransactions}>
                            <ListItemIcon>
                                <TimelapseIcon />
                            </ListItemIcon>
                            <ListItemText primary="Recent Transactions" />
                        </ListItem>
                        <ListItem button onClick={handleTransfer} >
                            <ListItemIcon>
                                <SwapHorizIcon />
                            </ListItemIcon>
                            <ListItemText primary="Transfer" />
                        </ListItem>
                        <ListItem button onClick={handleInvestmentPlan}>
                          <ListItemIcon>
                            <AssignmentIcon></AssignmentIcon>
                          </ListItemIcon>
                          <ListItemText primary="Investment Planner"></ListItemText>
                        </ListItem>
                        <ListItem button onClick={handleHelp} >
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Help" />
                        </ListItem>
                    </List>
                <Divider />
                <List>
                    <div>
                        <ListSubheader inset>My Account</ListSubheader>
                        <ListItem button onClick={handleAccountDetails}>
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Account Details" />
                        </ListItem>
                        <ListItem button onClick={handleSettings}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>
                    </div>
                </List>
            </Drawer>
        {num === 0 ? (
            <Dashboard authUser={props.authUser} firebase={props.firebase}></Dashboard>
        ) : (
            <div></div>
        )
        }
        {num === 1 ? (
            <div>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                        <SubAccounts></SubAccounts>
                </main>
            </div>
        ) : (
            <div></div>
        )
        }
        {num === 2 ? (
            <div>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <h1>Recent Tranacations Page</h1>
                    </Container>
                </main>
            </div>
        ) : (
            <div></div>
        )
        }
        {num === 3 ? (
            <div>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                    <AuthUserContext.Consumer>
                      {authUser => (
                        <Transfer authUser={authUser}/>
                      )}
                    </AuthUserContext.Consumer>
                    </Container>
                </main>
            </div>
        ) : (
            <div></div>
        )
        }
        {num === 4 ? (
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                    <ReactWebChat directLine={directLine} styleOptions={styleOptions}
                      />
                    </Container>
                </main>
        ) : (
            <div></div>
        )
        }
        {num === 5 ? (
            <div>
                <AccountPage></AccountPage>
            </div>
        ) : (
            <div></div>
        )
        }
        {num === 6 ? (
            <div>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <h1>Settings Page</h1>
                    </Container>
                </main>
            </div>
        ) : (
            <div></div>
        )
        }
        {num === 7 ? (
          <div>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
                <AuthUserContext.Consumer>
                  {authUser => (
                    <InvestmentPlanner authUser={authUser}/>
                  )}
                </AuthUserContext.Consumer>
            </main>
          </div>
        ) : (
          <div>

          </div>
        )
        }
        </div>
      </ThemeProvider>
    );
}

export default withFirebase(Platform);