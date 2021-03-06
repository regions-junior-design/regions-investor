import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { withFirebase } from '../Firebase';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from "../../MaterialUITheme";

const useStyles = makeStyles((theme) => ({
  drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
      },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
      flexGrow: 1,
      height: '100vh',
      width: '100vh',
      overflow: 'auto',
  },
  container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
  },
}));

function TransferPage(props) {

    const classes = useStyles();
    // console.log(props.authUser)
    const [acc1,setacc1] = useState(-1);
    const [acc2,setacc2] = useState(-1);
    const [sum,setsum] = useState(0);
    const [memo,setmemo] = useState("");
    const [ready,setReady] = useState(true);

    const [accounts,setAccounts] = useState([]);
    const [loaded,setLoaded] = useState(false);

    const [view, setView] = useState(0);
    const [num, setNum] = useState(0);

    // console.log(props);

    if(!loaded) {
      let ls = [];
      props.firebase.holding(props.authUser.uid).once('value').then( v => {
        let acc = v.val();
        console.log(acc);
        let holding = {
          value: acc.value,
          name: 'Holding Account'
        }
        ls.push({value: holding, acc: 'holding'});
        props.firebase.mainAccounts(props.authUser.uid).once('value').then( v => {
          let acc = v.val();
          // console.log(acc);
          // let ls = []
          for(var value in acc){
            // console.log(value, acc[value]);
            ls.push({value: acc[value], acc: value})
          }
          setAccounts(ls);
          // console.log(ls);
        })
        setLoaded(true);
      })
    }

    const checkReady = (a, b, c) => {
      // console.log(accounts[a] && accounts[b] && c);
      if (accounts[a] && accounts[b] && c) {
        if (accounts[a].acc !== accounts[b].acc) {
          setReady(false);
        } else {
          setReady(true);
        }
      }
      else {
        setReady(true);
      };
    }

    const updateData = (e) =>{
      // console.log(accounts[acc1])
      // console.log(accounts[acc2])
      // console.log(sum)
      handleCompletePage();
      if (accounts[acc1].acc === accounts[acc2].acc) {
        // console.log('same')
      } else if (accounts[acc1].acc === 'holding') {
        var updates = {};
        updates['value'] = accounts[acc1].value.value - sum;
        props.firebase.holding(props.authUser.uid).update(updates);
        updates = {};
        updates['currentAccountValue'] = accounts[acc2].value.currentAccountValue + sum;
        props.firebase.mainAccount(props.authUser.uid, accounts[acc2].acc).update(updates);
        setLoaded(false);
      } else if (accounts[acc2].acc === 'holding') {
        var updates = {};
        updates['currentAccountValue'] = accounts[acc1].value.currentAccountValue - sum;
        props.firebase.mainAccount(props.authUser.uid, accounts[acc1].acc).update(updates);
        updates = {};
        updates['value'] = accounts[acc2].value.value + sum;
        props.firebase.holding(props.authUser.uid).update(updates);
        setLoaded(false);
      } else {
        var updates = {};
        updates['currentAccountValue'] = accounts[acc1].value.currentAccountValue - sum;
        props.firebase.mainAccount(props.authUser.uid, accounts[acc1].acc).update(updates);
        updates['currentAccountValue'] = accounts[acc2].value.currentAccountValue + sum;
        props.firebase.mainAccount(props.authUser.uid, accounts[acc2].acc).update(updates);
        setLoaded(false);
      }
    }

    const handleMain= () => {
      setView("Transfer");
      setNum(0);
    }
  
    const handleCompletePage = () => {
      setView("CompletePage");
      setNum(1);
    }

  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <main className={classes.content}> */}
          <div>
              {num === 0 ? (
                <div>
                    <React.Fragment>
                    <br></br>
                    <Typography variant="h6" gutterBottom>
                      Transfer 
                    </Typography>
                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id="type-label">Transfer From</InputLabel>
                          <Select
                          labelId="type-label"
                          id="type"
                          onChange={(e) => {
                            setacc1(e.target.value)
                            checkReady(e.target.value, acc2, sum);
                          }}
                          >
                            {accounts.map((item, i) => 
                              // console.log(item, i);
                              <MenuItem value={i}>{item.value.name}</MenuItem>
                            )}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id="type-label">Transfer To</InputLabel>
                          <Select
                          labelId="type-label"
                          id="type"
                          onChange={(e) => {
                            setacc2(e.target.value);
                            checkReady(acc1, e.target.value, sum);
                          }}
                          >
                            {accounts.map((item, i) => 
                              // console.log(item, i);
                              <MenuItem value={i}>{item.value.name}</MenuItem>
                            )}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          required
                          id="goal"
                          name="goal"
                          label="Amount"
                          onChange={(e) => {
                            setsum(parseInt(e.target.value));
                            checkReady(acc1, acc2, e.target.value);
                          }}
                          fullWidth
                          type="number"
                          InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="desc"
                          name="desc"
                          label="Memo"
                          onChange={(e) => setmemo(e.target.value)}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="button"
                          variant="contained"
                          color="primary"
                          size="medium"
                          onClick={updateData}
                          disabled={ready}
                        >
                          Complete Transfer
                        </Button>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                        </div>
                    ) : (
                        <div></div>
                    )} {num === 1 ? (
                          <div>
                            <Typography variant="h1">Transfer Complete!</Typography>
                            <Button onClick={handleMain} variant="contained" color="primary" style={{
                              marginTop: 30
                            }}>
                              <Typography variant="button">Make another transfer</Typography>
                            </Button>
                          </div>
                  ) : (
                      <div></div>
                  )}
          </div>
          {/* </main> */}
          </ThemeProvider>
    )
}

export default withFirebase(TransferPage);