import { Box, Typography } from '@material-ui/core';
import React from 'react';

export default function News() {
    return(
        <Box style={{
            align:"center",
            borderStyle: 'solid',
            borderColor: '#88bd40',
            width: '380px',
            height: '200px',
            marginTop: '105px',
            marginLeft: '200px',
            marginRight: '10px',
            borderRadius: '13px',
            backgroundColor: 'white',
        }} className="scroll-to-element">
            <Typography variant="h2" className="news-title" style={{
                marginTop: '5px',
                marginLeft: '160px',
                fontSize: '30px'
            }}>
                News
 
            </Typography>
            <Typography variant="body1" style={{
                marginRight: '5px',
                marginLeft: '0px',
                }}>
                    <ul>
                        <li>
                            Saudi and Russia Agree to short term limits on Oil Production
                        </li>
                        <li>
                            Apple and Google Agree to work together on the Covid-19 Crisis
                        </li>
                    </ul>

                </Typography>
        </Box>
    )
}