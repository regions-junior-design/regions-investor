import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function RecentTransactions() {
    return(
        <React.Fragment>
            <Box style={{
                borderStyle: 'solid',
                borderColor: '#88bd40',
                width: '380px',
                height: '200px',
                marginTop: '20px',
                borderRadius: '13px',
                marginLeft: '200px',
                marginRight: '10px',
                backgroundColor: 'white',
                }}>
                <Typography variant="h2" style={{
                    marginLeft: '65px',
                    marginTop: '5px',
                    fontSize: '30px'
                }}>
                    Recent Transactions
                </Typography>
                <Typography variant="body1" style={{
                marginRight: '5px',
                }}>
                    <ul>
                        <li>
                           9/1 5 Shares of TSLA were purchased for your House Downpayment Account
                        </li>
                        <li>
                            8/28 New Phone account was created with a Conservative Investment Plan
                        </li>
                    </ul>

                </Typography>
            </Box>
        </React.Fragment>
    )
}