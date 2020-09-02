import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './IconScroller.css';
import {Button} from '@material-ui/core';

export default function IconScroller() {

    return(
        <React.Fragment>
            {/* <Button style={{
                width: '60px'
            }}> */}
                <KeyboardArrowDownIcon className="down-icon" style={{
                    width: 60,
                    height: 60,
                    marginLeft: '640px',
                    marginTop: '10px',
                    color: '#88bd40',
                    borderStyle: 'solid',
                    borderColor: '#88bd40',
                    borderRadius: '13px',
                    borderSpacing: '10px',
                }}>

                </KeyboardArrowDownIcon>
            {/* </Button> */}

        </React.Fragment>
    )
}