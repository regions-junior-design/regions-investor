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

function TransferPage(props) {
    // console.log(props.authUser)
    const [acc1,setacc1] = useState(-1);
    const [acc2,setacc2] = useState(-1);
    const [sum,setsum] = useState(0);
    const [memo,setmemo] = useState("");
    const [ready,setReady] = useState(true);

    const [accounts,setAccounts] = useState([]);
    const [loaded,setLoaded] = useState(false);

    // console.log(props);

    if(!loaded) {
      props.firebase.mainAccounts(props.authUser.uid).once('value').then( v => {
        let acc = v.val();
        // console.log(acc);
        let ls = []
        for(var value in acc){
          // console.log(value);
          ls.push({value: acc[value], acc: value})
        }
        setAccounts(ls);
      })
      setLoaded(true);
    }

    const checkReady = (a, b, c) => {
      console.log(accounts[a] && accounts[b] && c);
      if (accounts[a] && accounts[b] && c) {
        setReady(false);
      }
      else {
        setReady(true);
      };
    }

    const updateData = (e) =>{
      // console.log(accounts[acc1])
      // console.log(accounts[acc2])
      // console.log(sum)

      var updates = {};
      updates['currentAccountValue'] = accounts[acc1].value.currentAccountValue - sum;
      props.firebase.mainAccount(props.authUser.uid, accounts[acc1].acc).update(updates);
      updates['currentAccountValue'] = accounts[acc2].value.currentAccountValue + sum;
      props.firebase.mainAccount(props.authUser.uid, accounts[acc2].acc).update(updates);
      setLoaded(false);
    }

  return (
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
            label="Ammount"
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
  );
}

export default withFirebase(TransferPage);