// import React from 'react';

// const Landing = () => (
//   <div>
//     <h1>Landing</h1>
//   </div>
// );

// export default Landing;


import React, { useState }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {theme} from '../../MaterialUITheme';
import {ThemeProvider } from '@material-ui/core/styles';

import { SignInForm, SignInGoogle } from '../SignIn'
import { SignUpForm } from '../SignUp'
import { PasswordForgetForm } from '../PasswordForget'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Landing() {
  const classes = useStyles();

  // Sing In, Sign Up, Forgot Password
  const [view, setView] = useState("Sign In");
  const [num, setNum] = useState(0);

  const handleClick = (v) => {
    setView(v);
  };

  const handleBack = () => {
    setView("Sign Up");
    setNum(0);
  };
  const handleForgot = () => {
    setView("Forgot Password");
    setNum(2);
  };
  const handleNew = () => {
    setView("Sign Up");
    setNum(1);
  };

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {view}
        </Typography>
        
        {num === 0 ? (
            <div>
              <SignInForm></SignInForm>
              <br></br>
              <SignInGoogle></SignInGoogle>
              <br></br>
              <Grid container>
                <Grid item xs>
                  <Typography variant="body2" onClick={handleForgot}>
                    {"Forgot password?"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" onClick={handleNew}>
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div></div>
          )
        }
        {num === 1 ? (
            <div>
              <SignUpForm></SignUpForm>
              <br></br>
              <Grid container>
                <Grid item xs>
                  <Typography variant="body2" onClick={handleBack}>
                    {"Back"}
                  </Typography>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div></div>
          )
        }
        {num === 2 ? (
            <div>
              <PasswordForgetForm></PasswordForgetForm>
              <br></br>
              <Grid container>
                <Grid item xs>
                  <Typography variant="body2" onClick={handleBack}>
                    {"Back"}
                  </Typography>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div></div>
          )
        }

      </div>
    </Container>
    </ThemeProvider>
  );
}