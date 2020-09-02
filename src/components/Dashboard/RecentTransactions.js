import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function RecentTransactions() {
    return(
        <React.Fragment>
            <Box style={{
                borderStyle: 'solid',
                borderColor: '#88bd40',
                width: '480px',
                height: '300px',
                marginTop: '60px',
                borderRadius: '13px',
                marginLeft: '400px',
                backgroundColor: 'white',
                }}>
                <Typography variant="h2" style={{
                    color: '#88bd40', 
                    marginLeft: '55px',
                    marginTop: '5px',
                }}>
                    Recent Transactions
                </Typography>
            </Box>
        </React.Fragment>
    )
}