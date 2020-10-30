import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import SecurityGridDetail from "./SecurityGridDetail";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Card } from '@material-ui/core';
import {theme} from '../../MaterialUITheme';

const primary = "#88bb00";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(0.5),
    maxWidth: 500,
    height: 200,
    width: 400,
  },
  image: {
    width: 128,
    height: 128,
  },
  margin: {
    margin: theme.spacing(1),
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function SecuritiesGrid() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const [open, setOpen] = React.useState(false);
  const [variant, setVariant] = React.useState("outlined");

  const handleClose = () => {
    setOpen(false);
};

const handleClickOpen = () => {
    setOpen(true);
};

const handleClickAdd = () => {
    console.log(1);
    if (document.getElementById("add").innerHTML == "Remove") {
      document.getElementById("add").innerHTML = "Add";
      setVariant("outlined");
    } else {
      document.getElementById("add").innerHTML = "Remove";
      setVariant("contained");
    }

};

  //this line with {0,1,2,3} is where you pass in how many cards in the grind to create and then a value to map this to
  return (
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
      <Grid container justify="flex-start" spacing={spacing}>
        {[0,1,2,3,4].map((value) => (
          <Grid key={value} item>
            <Card className={classes.paper} elevation={3} style={{
              backgroundColor: "#88bb00"
            }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h3">
                  Social Media
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Companies exposed to the social meida landscape globally either directly or indirectly.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Top Holdings: Facebook, Twitter, Tencent, Snap
                </Typography>
                <Grid justify="flex-end" direction="column">
              <Button id="add" variant={variant} color="primary" size="small" className={classes.margin} onClick={handleClickAdd}>
                    Add
            </Button>
            <Button variant="outlined" color="primary" size="small" className={classes.margin} onClick={handleClickOpen}>
                    Details
            </Button>
            <Dialog
                                       open={open}
                                       onClose={handleClose}
                                       aria-labelledby="form-dialog-title"
                                   >
                                       <DialogContent>
                                           <SecurityGridDetail
                                               back={handleClose}
                                           ></SecurityGridDetail>
                                       </DialogContent>
                                       <DialogActions>
                                           <Button
                                               onClick={
                                                   handleClose
                                               }
                                               color="primary"
                                           >
                                               Cancel
                                           </Button>
                                       </DialogActions>
                                   </Dialog>
              </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>

</Grid>
     
  );
}