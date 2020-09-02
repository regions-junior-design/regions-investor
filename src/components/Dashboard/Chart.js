import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Container, CssBaseline, Button, ButtonGroup, ListItemSecondaryAction, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
export default function Chart() {
  const theme = useTheme();

  return (
<React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <div class="grid-layout">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
            <Typography className="item1" variant="h2">
              Dashboard
            </Typography>
            <Button variant="contained" color="primary" className="item2">
              <Typography variant='button'>
                  Edit
              </Typography>
            </Button>
            {/* <button class="item2">Edit</button> */}
            <svg class="item3" style={{
                  height: '350px',
                  width: '1000px',
                  border: 'solid',
                  color: '#88bd40',
                  marginBottom: '20px',
                  borderRadius: '13px',
            }}>
                  <text textAnchor="middle" x="200" y="55" style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    fill: '#88bd40',
                  }}>Total Account Value:</text>
                  <text textAnchor="middle" x="200" y="105" style={{
                    fontSize: '40px',
                    fill: '#55893d',
                  }}> $18,345.78 </text>
                  <text textAnchor="middle" x="200" y="135" style={{
                    fontSize: '20px',
                    fill: '#88bd40',
                  }}> (+3.89%) </text>
{/* 
                  <path d="M0, 5L20, 20L40, 10L60, 40L80, 5L100, 60" stroke="#55893d" stroke-width="2" fill='none'></path> */}
            </svg>
            <ButtonGroup className="graph-nav">
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  1 Day
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  1 Week
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  1 Month
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  1 Year
                </Typography>
              </Button>
              <Button variant="contained" color="secondary" size='large' className="graph-button-individual">
                <Typography variant='button'>
                  5 Years
                </Typography>
              </Button>
            </ButtonGroup>

            {/* <GraphNav></GraphNav> */}

        </div>
        </Container>
      </React.Fragment>
  );
}
