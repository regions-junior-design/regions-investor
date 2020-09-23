import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { Button,Input, FormControl, ButtonGroup, Grid, TextField, Typography} from '@material-ui/core';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  submitClicked: false,
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne, passwordTwo } = this.state;
    if (!(passwordOne !== passwordTwo || passwordOne === '')) {
      this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
    this.setState({ submitClicked: true });

    } 
  }

  onChange = event => {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error, submitClicked, } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="passwordOne"
            name="passwordOne"
            type="password"
            label="New Password"
            onChange={this.onChange}
            label="New Password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="passwordTwo"
            type="password"
            name="passwordTwo"
            label="Confirm Password"
            onChange={this.onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
        {error && <p>{error.message}</p>}
       {!error && submitClicked &&                   
       <Typography className="item1" variant="h6" color="primary">
            Password Succesfully Updated
        </Typography>}
       <Button
         type="button"
         variant="contained"
         color="primary"
         size="medium"
         onClick={this.onSubmit}
       >
        Update Passoword

       </Button>
        </Grid>
      </Grid>
      
    );
  }
}

export default withFirebase(PasswordChangeForm);

