import React from 'react';

export default function GraphItemButton({name}) {
    return(
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JPdisplay=swap" rel="stylesheet"></link>
            <button variant='button' className="graph-button-individual">{name}</button>
        </div>

    )
}