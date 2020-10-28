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
  //this line with {0,1,2,3} is where you pass in how many cards in the grind to create and then a value to map this to
  return (
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
      <Grid container justify="flex-start" spacing={spacing}>
        {[0,1,2,3,4].map((value) => (
          <Grid key={value} item>
            <Paper className={classes.paper}>
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
              <Button variant="outlined" color="primary" size="small" className={classes.margin}>
                    Add
            </Button>
            <Button variant="outlined" color="primary" size="small" className={classes.margin}>
                    Details
            </Button>
              </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>

</Grid>
     
  );
}