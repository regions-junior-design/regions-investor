import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';
import EnhancedTable from './EnhancedTable';


export default function InvestmentPlannerPage({del, onSelected}) {
    return ( 
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <ETableF authUser={authUser} del={del} onSelected={onSelected}/>
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
        selected: [],
      };
    }

    
  
    componentDidMount() {
      this.onListenForMessages();
    }
  
    onSelected = (selected) => {
      console.log("is elected" + selected)
      this.setState({selected: selected })
      this.props.onSelected(selected)

    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.del != this.props.del) this.onRemoveMessage()
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
      this.props.firebase.mainAccounts(this.props.authUser.uid).off();
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
  
    //  onEditMessage = (message, text) => {
    //   const { uid, ...messageSnapshot } = message;
  
    //  this.props.firebase.message(this.user.uid, message.uid).set({
    //     ...messageSnapshot,
    //      text,
    //      editedAt: this.props.firebase.serverValue.TIMESTAMP,
    //    });
    //  };


  
    onRemoveMessage = () => {
      const {selected} = this.state;
      selected.forEach( v => { 
        console.log(v)
        this.props.firebase.mainAccount(this.props.authUser.uid, v).once('value').then( a => {
          let av = parseInt(a.val()['currentAccountValue']);
          // console.log(cv);
          // this.props.firebase.holding(this.props.authUser.uid).once('value').then( h => {
          //   let hv = h.val()['value'];
          //   // console.log(hv);
          //   let newVal = hv + av;
          //   this.props.firebase.holding(this.props.authUser.uid).update({value: newVal});
          // });
          this.props.firebase.mainAccount(this.props.authUser.uid, v).remove();
        });
      })
    };
  
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
                        onSelected={this.onSelected}
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
