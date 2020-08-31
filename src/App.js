import React, {useState, useEffect, Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import GoogleLogin from "react-google-login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavItem, Form, Row, Col, FormControl, InputGroup, Button} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib"
import logo from './logo.png';
import Chart from './containers/Chart.js';
import XAxis from './containers/XAxis';
import YAxis from './containers/YAxis';
import Line from './containers/Line';
import Main from './components/Main';
import NotFound from './containers/404';
import NavMenu from './components/NavMenu';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#55893d"
        },
        secondary: {
            main: "#88bd40"
        }
    }
});

function App () {

    const history = useHistory();
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    async function handleLogout() {
        userHasAuthenticated(false);
        history.push("/login");
    }

    var arrayDat = [125, 230, 345, 260, 441, 335, 170, 294, 312, 145];

    return (
    <ThemeProvider theme={theme}>
        <div>
            <div className="App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={logo} alt="Logo" align="left"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"/>
                        <Nav>
                            {isAuthenticated
                                ? <Nav.Link onClick={handleLogout}><button>Logout</button></Nav.Link>
                                : <>
                                    <LinkContainer to="/signup">
                                        <button>Signup</button>
                                    </LinkContainer>
                                    <LinkContainer to="/login">
                                        <button>Login</button>
                                    </LinkContainer>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>

                {/* is this the right place to put the route */}

                <Router>
                    <Switch>
                    {/* <Route path="/login" component={Login}/> */}
                        <Route path="/main" component={Main} exact></Route>
                        <Route path="/" component={NavMenu}></Route>
                        <Route component={NotFound} />
                    </Switch>
                </Router>
                {/* <Routes /> */}
            </AppContext.Provider>

            {/* <Chart></Chart>
            <div class="linechart">
                <svg
                className="lineChartSvg"
                >
                <g>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Line/>
                </g>
                </svg>
            </div> */}

            {/* <Router>
                <Switch>
                {/* <Route path="/login" component={Login}/>
                    <Route path="/main" component={Main} exact></Route>
                    <Route component={NotFound} />
                </Switch>
            </Router> */}
        </div>
    </ThemeProvider>
    )
}
export default App;
