import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  // <Typography variant='signOutButton' onClick={firebase.doSignOut}>
  // Sign Out
  // </Typography>
  <Button
  variant="contained"
  color="secondary"
  size="small"
  onClick={firebase.doSignOut}
  >
    <Typography variant="button">
      Sign Out
    </Typography> 
  </Button>
);

export default withFirebase(SignOutButton);
