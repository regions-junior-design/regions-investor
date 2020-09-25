import React, { Component } from 'react';

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import EnhancedTable from './EnhancedTable';

export default function SubAccountPage() {
    return ( 
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <ETableF authUser={authUser}/>
          </div>
        )}
      </AuthUserContext.Consumer>
  );
  }

class ETable extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        text: '',
        loading: false,
        messages: [],
      };
    }
  
    componentDidMount() {
      this.onListenForMessages();
    }
  
    onListenForMessages = () => {
      this.setState({ loading: true });
  
      this.props.firebase
        .mainAccounts(this.props.authUser.uid)
        .on('value', snapshot => {
          const messageObject = snapshot.val();
  
          if (messageObject) {
            const messageList = Object.keys(messageObject).map(key => ({
              ...messageObject[key],
              uid: key,
            }));
  
            this.setState({
              messages: messageList,
              loading: false,
            });
          } else {
            this.setState({ messages: null, loading: false });
          }
        });
    };
  
    componentWillUnmount() {
      this.props.firebase.messages(this.props.authUser.uid).off();
    }
  
    // onCreateMessage = (event, authUser) => {
    //   this.props.firebase.messages(this.user.uid).push({
    //     text: this.state.text,
    //     userId: authUser.uid,
    //     createdAt: this.props.firebase.serverValue.TIMESTAMP,
    //   });
  
    //   this.setState({ text: '' });
  
    //   event.preventDefault();
    // };
  
    // onEditMessage = (message, text) => {
    //   const { uid, ...messageSnapshot } = message;
  
    //   this.props.firebase.message(this.user.uid, message.uid).set({
    //     ...messageSnapshot,
    //     text,
    //     editedAt: this.props.firebase.serverValue.TIMESTAMP,
    //   });
    // };
  
    // onRemoveMessage = uid => {
    //   this.props.firebase.mainAccount(this.props.user.uid, uid).remove();
    // };
  
    render() {
      const { text, messages, loading } = this.state;
  
      return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <div>
                    {loading && <div>Loading ...</div>}

                    {messages && (
                    <EnhancedTable
                        authUser={authUser}
                        rows={messages}
                        // onEditMessage={this.onEditMessage}
                        // onRemoveMessage={this.onRemoveMessage}
                    />
                    )}
                </div>
                )}
            </AuthUserContext.Consumer>
      );
    }
  }
  
  const ETableF = withFirebase(ETable);
