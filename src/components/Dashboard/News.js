import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function News() {
    return(
        <Box style={{
            borderStyle: 'solid',
            borderColor: '#88bd40',
            width: '480px',
            height: '300px',
            marginTop: '60px',
            marginLeft: '180px',
            borderRadius: '13px',
            backgroundColor: 'white',
        }}>
            <Typography variant="h2" style={{
                color: '#88bd40', 
                marginLeft: '180px',
                marginTop: '5px',
            }}>
                News
            </Typography>
        </Box>
    )
}