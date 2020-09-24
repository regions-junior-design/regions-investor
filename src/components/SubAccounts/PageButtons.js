import React, {useState} from 'react';
// import InfoIcon from '@material-ui/icons/Info';
// import IconButton from '@material-ui/core/IconButton';
import {Typography, Button, Grid} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './index.css';
import { Add } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';

export default function PageButtons() {

    return(
        <>
           <Button variant='contained' className="tooltip" style={{
               marginBottom: 20,
               backgroundColor: "#528400",
               color: 'white',
           }}> <AddIcon fontSize='medium'></AddIcon>
            <Typography className="tooltiptext">Add Goal</Typography>
           </Button>
           <Button variant='contained' className="tooltip" style={{
               marginBottom: 20,
               backgroundColor: "#528400",
               color: 'white',
               marginLeft: 20
           }}>
               <EditIcon fontSize='medium'></EditIcon>
               <Typography className="tooltiptext">Edit Goal</Typography>
           </Button>

        </>
    )
}
