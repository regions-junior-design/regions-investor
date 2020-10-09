import { Typography } from '@material-ui/core';
import React from 'react';


export default function Heading() {

    function showInfo() {
        return(
            <Typography>Testing</Typography>
        )
    }    
    
    return(
        <>
        <Typography variant='h1' style={{
            paddingBottom: 30,
        }}>Sub Account Information</Typography>
 
        {/* <IconButton onClick={showInfo}>
            <InfoIcon></InfoIcon>
        </IconButton> */}


        </>
    )

}