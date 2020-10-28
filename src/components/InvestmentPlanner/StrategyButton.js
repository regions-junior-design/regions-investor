import React from 'react';
import FullScreenDialog from './FullScreenDialog';
import Grid from '@material-ui/core/Grid';

export default function StrategyButton({strategy}) {
    console.log({strategy});
    if (strategy == 1) {
        return(
            <div>
                <Grid item xs={12} sm={4}>
                    <FullScreenDialog label="Themes" title="Themes"></FullScreenDialog>
                </Grid>
            </div>
        )
    } else {
        return(
            <div>
                <Grid item xs={12}>
                    <FullScreenDialog label="Bonds" title="Bonds Options"></FullScreenDialog>
                </Grid>
                <Grid item xs={12}>
                    <FullScreenDialog label="Stocks" title="Stock Options"></FullScreenDialog>
                </Grid>
            </div>
        )
    }
}