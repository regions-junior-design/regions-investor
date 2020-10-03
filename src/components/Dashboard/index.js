import Dashboard from './Dashboard';
import React, { useState }from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewListIcon from '@material-ui/icons/ViewList';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import HelpIcon from '@material-ui/icons/Help';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {theme} from '../../MaterialUITheme';
import {ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SignOut from '../SignOut';
import AccountPage from '../Account';
import SubAccounts from '../SubAccounts/SubAccounts';



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

export default function Platform() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const [view, setView] = useState("Dashboard");
  const [num, setNum] = useState(0);

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

  const handleResearch = () => {
    setView("Research");
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
                    <img src="https://lh3.googleusercontent.com/kPTc1uhV8RQn_JOrTFBIbHXznvmZKvmfupQ7vVFUj_VyLhRWc7IpXPEL15m_kU5udvWK43o30zHDQkbV2-XKkNko886I2haSalGqL2jWvQpkmfXQ0GgIGFqXzEtCKAASHtVzbGdxE2LMR5lBLr4YWoIbieqh8HOwh8LrUpmJGD8DBEvFt-M4uxuiRKj0YVpCO5X6ZClvEYZB5RcWmcQRLoLUXG_q-0rep2pQi1hKPjlq1t33-f6mewRqooBJ75KdFlliFdpwSY-W9aY7dahX7Tg0wWAnnnQ3-7lWdzFafpGpc622spiO19S9e2RNMCPazzXm3T-dzvcQJ3R9W_qWbyIbgZF29kyFkVH-w1rLbiT7pjSMTiLEDH6zri78uY5mM-2M1bRH0TZrDPKHU_J3E9EsoZ2FdkcxDBiTKLNxoSdNW4kY0CwaKhskRoRYYpz1bXF5LeVT7NLoOZ7Pm0a71TfFO4ey5OkRusw5sA8uZNuIKJhHUDafdJuI62Cif-o_hUdMr8sqwLgn89cXOODcNfcr0XF0UXhR8QkoKnqXtCbQ609tFkdk5iDRB0JpjpN44agPxHadDnYkGCMoPWJV2fKIiu1yGRkCMr9YoxixVRuN4_urTunqSlAX3o1BS0mAhvKzcfC1rKCxOpbJOVAVo3gekAtdXHjdlzx5WwHOx-YvsnYY-v40_o409Bq01g=w446-h327-no?authuser=0" style={{
                          marginLeft: 3,
                          marginTop: 3,
                          marginRight: 5,
                          height: 50,
                          width: 70
                        }}></img>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Regions Personal Investment Platform 
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
                    <List>
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
                            <ListItemText primary="Accounts" />
                        </ListItem>
                        <ListItem button onClick={handleTransactions}>
                            <ListItemIcon>
                                <TimelapseIcon />
                            </ListItemIcon>
                            <ListItemText primary="Recent Transactions" />
                        </ListItem>
                        <ListItem button onClick={handleResearch} >
                            <ListItemIcon>
                                <FindInPageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Research" />
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
            <Dashboard></Dashboard>
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
                        <h1>Research Page</h1>
                    </Container>
                </main>
            </div>
        ) : (
            <div></div>
        )
        }
        {num === 4 ? (
            <div>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                            <h1>Help Page</h1>
                    </Container>
                </main>
            </div>
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
        </div>
      </ThemeProvider>
    );
}