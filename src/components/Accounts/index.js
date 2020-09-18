import React from 'react';
import { compose } from 'recompose';

import { AuthUserContext, withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import MainAccounts from '../MainAccounts';
import {
  withFirebase
} from '../Firebase';


const Accounts = () => (
  <div>
    <h1>Accounts Page</h1>

    <AuthUserContext.Consumer>
      {authUser => (
        <MainAccounts authUser={authUser} />
      )}
      {/* {authUser => (
        <MainAccounts authUser={authUser} />
      )} */}
    </AuthUserContext.Consumer>
  </div>
);

const condition = authUser => !!authUser;

export default withFirebase(Accounts);
