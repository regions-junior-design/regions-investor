import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function TickerPopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Ticker Options
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Ticker Options"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <List>
                <ListItem>
                    <Typography variant="h4">S&P 500</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h4">Dow 30</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h4">Nasdaq</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h4">Russell 2000</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h4">Crude Oil</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h4">AAPL</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h4">SPY</Typography>
                </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}