import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './IconScroller.css';
import {Button} from '@material-ui/core';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default function IconScroller() {

    return(
        <React.Fragment>
            <Button className="scroll-button" style={{
                width: '60px',
                marginLeft: '650px'
            }}>
                <KeyboardArrowDownIcon className="down-icon" style={{
                    width: 60,
                    height: 60,
                    marginTop: '10px',
                    color: '#88bd40',
                    borderStyle: 'solid',
                    borderColor: '#88bd40',
                    borderRadius: '13px',
                    borderSpacing: '10px',
                }}>

                </KeyboardArrowDownIcon>
            </Button>

        </React.Fragment>
    )
}