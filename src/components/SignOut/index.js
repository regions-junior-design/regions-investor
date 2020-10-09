import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withFirebase } from '../Firebase';
import { createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';


export const theme = createMuiTheme({
  palette: {
      primary: {
          main: "#528400"
      },
      secondary: {
          main: "#88bb00"
      }
  },
  spacing: 2,
  typography: {
    fontFamily: "'Raleway', Sans-Serif",
    button: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: 15,
      textPrimary: "#ffffff",
      textSecondary: "#000000",
      margin: 5,
      textTransform: 'capitalize',
    },

  }
});

const SignOutButton = ({ firebase }) => (
  // <Typography variant='signOutButton' onClick={firebase.doSignOut}>
  // Sign Out
  // </Typography>
  <MuiThemeProvider theme={theme}>
     <Button
  variant="contained"
  color="secondary"
  size="small"
  className={theme.signOutButton}
  onClick={firebase.doSignOut}
  >
    <Typography variant="button" color="textSecondary">
      Sign Out
    </Typography> 
  </Button>
  </MuiThemeProvider>
);

export default withFirebase(SignOutButton);
