import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Main from '../Main';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#55893d"
        },
        secondary: {
            main: "#88bd40"
        }
    },
    typography: {
      fontFamily: "'Raleway', Sans-Serif",
      h1: {
        fontFamily: "'Raleway', Sans-Serif",
        fontSize: 30, 
      },
      h2: {
        fontFamily: "'Open Sans', Sans-Serif",
      },
      body1: {
        fontFamily: "'Open Sans', Sans-Serif",
        fontSize: 16,
      }, 
      button: {
        fontFamily: "'Raleway', Sans-Serif",
        fontSize: 20,
      }

    }
});


const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300,400" rel="stylesheet"/>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path="/main" component={Main}></Route>
    </div>
    </ThemeProvider>
  </Router>
);

export default withAuthentication(App);
