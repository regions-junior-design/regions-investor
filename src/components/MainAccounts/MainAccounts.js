import React, { Component } from 'react';

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import MainAccountList from './MainAccountList';

class MainAccounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      loading: false,
      accounts: [],
      limit: 5,
    };

    this.user = this.props.authUser;
  }

  componentDidMount() {
    this.onListenForMainAccounts();
  }

  onListenForMainAccounts = () => {
    this.setState({ loading: true });

    this.props.firebase
      .mainAccounts(this.user.uid)
      .orderByChild('createdAt')
      .limitToLast(this.state.limit)
      .on('value', snapshot => {
        const accountObject = snapshot.val();

        if (accountObject) {
          const accountsList = Object.keys(accountObject).map(key => ({
            ...accountObject[key],
            uid: key,
          }));

          this.setState({
            accounts: accountsList,
            loading: false,
          });
        } else {
          this.setState({ accounts: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.props.firebase.mainAccount(this.user.uid).off();
  }

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };

  onCreateAccount = (event, authUser) => {
    this.props.firebase.mainAccounts(this.user.uid).push({
      text: this.state.text,
      userId: authUser.uid,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
    });

    this.setState({ text: '' });

    event.preventDefault();
  };

  onEditAccount = (account, text) => {
    const { uid, ...accountSnapshot } = account;

    this.props.firebase.mainAccount(this.user.uid, account.uid).set({
      ...accountSnapshot,
      text,
      editedAt: this.props.firebase.serverValue.TIMESTAMP,
    });
  };

  onRemoveAccount = uid => {
    this.props.firebase.mainAccount(this.user.uid, uid).remove();
  };

  onNextPage = () => {
    this.setState(
      state => ({ limit: state.limit + 5 }),
      this.onListenForMessages,
    );
  };

  render() {
    const { text, accounts, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            {!loading && accounts && (
              <button type="button" onClick={this.onNextPage}>
                More
              </button>
            )}

            {loading && <div>Loading ...</div>}

            {accounts && (
              <MainAccountList
                authUser={authUser}
                accounts={accounts}
                onEditAccount={this.onEditAccount}
                onRemoveAccount={this.onRemoveAccount}
              />
            )}

            {!accounts && <div>There are no accounts ...</div>}

            <form
              onSubmit={event =>
                this.onCreateAccount(event, authUser)
              }
            >
              <input
                type="text"
                value={text}
                onChange={this.onChangeText}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(MainAccounts);
