import { Typography } from '@material-ui/core';
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Progress() {

    var progress = 50;

    return (
        <div>
            <LinearProgress style={{
                height: 20
            }} variant='determinate' value={progress}></LinearProgress>
        </div>
    )
}