import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


export default function NewGoalPage() {

    return (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Create New Goal
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="goalName"
                name="goalName"
                //defaultValue={name_f}
                //onChange={(e) => setNamef(e.target.value)}
                label="Name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                label="Amount"
                id="standard-start-adornment"
                //className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                label="Initial Deposit"
                id="standard-start-adornment"
                //className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2021-01-01"
                    //className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl /*className={classes.formControl}*/>
                    <InputLabel id="demo-simple-select-placeholder-label-label">Plan</InputLabel>
                    <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    //value={investmentPlan}
                    //onChange={handleChange}
                    >
                        <MenuItem value={10}>None</MenuItem>
                        <MenuItem value={20}>Conservative</MenuItem>
                        <MenuItem value={30}>Moderate</MenuItem>
                        <MenuItem value={20}>Aggresive</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
           <Button
             type="button"
             variant="contained"
             color="primary"
             size="medium"
             //onClick={updateData}
           >
            Create
           </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    
}