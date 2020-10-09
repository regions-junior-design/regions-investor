import { Typography } from '@material-ui/core';
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Progress({num}) {

    return (
        <div>
            <LinearProgress style={{
            height: 30,
            width: 500
        }} variant='determinate' value={num}></LinearProgress>
        </div>
    )
}