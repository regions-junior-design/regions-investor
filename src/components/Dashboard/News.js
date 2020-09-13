import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function News() {
    return(
        <Box style={{
            align:"center",
            borderStyle: 'solid',
            borderColor: '#88bd40',
            width: '480px',
            height: '180px',
            marginTop: '20px',
            marginLeft: '180px',
            borderRadius: '13px',
            backgroundColor: 'white',
        }} className="scroll-to-element">
            <Typography variant="h2" className="news-title" style={{
                marginTop: '5px',
                marginLeft: '200px',
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