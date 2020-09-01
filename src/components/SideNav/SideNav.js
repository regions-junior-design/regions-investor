import React from 'react';
import { Container, Typography, Button, ButtonGroup } from '@material-ui/core';

export default function SideNav() {
    return(
        <React.Fragment>
            <Container fixed>
                <ButtonGroup orientation="vertical" aria-label="vertical outlined primary button group">
                    <Button>
                        <Typography>
                            Account Total
                        </Typography>
                    </Button>
                    <Button>
                        <Typography>
                            Homepage
                        </Typography>
                    </Button>
                    <Button>
                        <Typography>
                            Account Details
                        </Typography>
                    </Button>
                    <Button>
                        <Typography>
                            Recent Transactions
                        </Typography>
                    </Button>
                    <Button>
                        <Typography>
                            Research
                        </Typography>
                    </Button>
                    <Button>
                        <Typography>
                            Help
                        </Typography>
                    </Button>
                    <Button>
                        <Typography>
                            Settings
                        </Typography>
                    </Button>
                </ButtonGroup>
            </Container>
        </React.Fragment>
    )
}
