import React from 'react';
import { Container, Typography, Button, ButtonGroup } from '@material-ui/core';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import { spacing } from '@material-ui/system';

export default function SideNav() {
    return(
        <React.Fragment>
            <Container fixed>
                <ButtonGroup orientation="vertical" aria-label="vertical outlined primary button group" className="side-nav-group">
                    <Button color='secondary' variant='contained' className="account-button">
                        <Typography variant='button'>
                            Account Total
                        </Typography>
                    </Button>
                    <Button color='primary' variant='contained' className="side-nav-button">
                        <Typography variant='button'>
                            Homepage
                        </Typography>
                    </Button>
                    <Button color='primary' variant='contained' className="side-nav-button">
                        <Typography variant='button'>
                            Account Details
                        </Typography>
                    </Button>
                    <Button color='primary' variant='contained' className="side-nav-button">
                        <Typography variant='button'>
                            Recent Transactions
                        </Typography>
                    </Button>
                    <Button color='primary' variant='contained' className="side-nav-button">
                        <Typography variant='button'>
                            Research
                        </Typography>
                    </Button>
                    <Button color='primary' variant='contained' className="side-nav-button">
                        <Typography variant='button'>
                            Help
                        </Typography>
                    </Button>
                    <Button color='primary' variant='contained' className="side-nav-button">
                        <Typography variant='button'>
                            Settings
                        </Typography>
                    </Button>
                </ButtonGroup>
            </Container>
        </React.Fragment>
    )
}
