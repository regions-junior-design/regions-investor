import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function NavMenu() {
    const classes = useStyles();

    return(
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
            <div className={classes.root}>
  
            <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
            >
            <Button>Homepage</Button>
            <Button>Account Details</Button>
            <Button>Recent Transactions</Button>
            </ButtonGroup>

            </div>
            </Typography>

        </Container>
      </React.Fragment>

    )
}