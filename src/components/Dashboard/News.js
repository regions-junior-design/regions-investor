import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function News() {
    return(
        <Box style={{
            borderStyle: 'solid',
            borderColor: '#88bd40',
            width: '500px',
            height: '300px',
            marginTop: '90px',
            marginLeft: '180px',
            borderRadius: '13px',
        }}>
            <Typography variant="h2" style={{
                color: '#88bd40', 
            }}>
                News
            </Typography>
        </Box>
    )
}