// import InfoIcon from '@material-ui/icons/Info';
// import IconButton from '@material-ui/core/IconButton';
import { Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import './index.css';

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
           <Button variant='contained' className="tooltip" style={{
               marginBottom: 20,
               backgroundColor: "#528400",
               color: 'white',
           }}> <DeleteIcon fontSize='medium'></DeleteIcon>
            <Typography className="tooltiptext">Delete</Typography>
           </Button>


        </>
    )
}
