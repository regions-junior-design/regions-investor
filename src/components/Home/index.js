import React from 'react';
import { compose } from 'recompose';

import { AuthUserContext, withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import MainAccounts from '../MainAccounts';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>

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

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
