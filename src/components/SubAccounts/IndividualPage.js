import React, { useEffect, useState } from 'react';
import { withFirebase } from '../Firebase';
import Grid from '@material-ui/core/Grid';
import {Typography, Button } from '@material-ui/core';
import { AuthUserContext } from '../Session';
import Progress from '../Dashboard/Progress';
import PieCharts from '../Dashboard/PieCharts';

    // First Pie Chart data
    const data1 = {
        labels: [
            'GOOG',
            'SBUX',
            'EFX'
        ],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: [
            '#47c3d4',
            '#cc4e00',
            '#ffc425'
            ],
            hoverBackgroundColor: [
            '#47c3d4',
            '#cc4e00',
            '#ffc425'
            ]
        }]
    };

  // First Pie Chart Options
  const options1 = {
      legend: {
          position: 'bottom',
          labels: {
              fontSize: 20
          }
      }, 
      title: {
          display: true,
          position: 'top',
          fontSize: 24,
          text: 'Distribution of funds'
      }
  }


function IndividualPage(props) {

    const [currentAccValue, setcurrentAccValue ] = useState(0)
    const [goal, setGoal ] = useState(0)

    const onListenForSubAccounts = () => { 

        props.firebase
          .mainAccount(props.authUser.uid, props.selected[0] )
          .on('value', snapshot => {
            const accountObject = snapshot.val();
            console.log("accountOBject")
            console.log(accountObject)
            setcurrentAccValue(accountObject.currentAccountValue)
            setGoal(accountObject.goalAmount)
            
          });
    
    
        }
    
    
      useEffect(() => { 
          onListenForSubAccounts();
      }, [])


    return(
      <div>
        <AuthUserContext.Consumer>
            {authUser   => (
            <div>
                <Grid container spacing={3} alignItems='center'>

                    <Grid item xs={12} style={{
                        marginLeft: 500,
                    }}>
                        <Typography variant='h1'></Typography>
                    </Grid>

                    <Grid item xs={12} style={{
                        marginLeft: 490,
                        marginTop: 10
                    }}>
                        <Typography variant='h3' style={{
                            borderStyle: 'solid', 
                            borderColor: "#88bb00",
                            borderWidth: 10,
                            padding: 10,
                            width: 460
                        }}>Total Subaccount Value: $ { currentAccValue ? currentAccValue : 0 }  </Typography>
                    </Grid>

                    <Grid item xs={12} style={{
                        marginLeft: 610,
                        marginTop: -10
                    }}>
                        <Typography variant='h4'>Progress to Goal: $ {goal ? goal : 0}</Typography>
                    </Grid>

                    <Grid item xs={12} style={{
                        marginLeft: 470,
                        marginTop: -10
                    }}>
                        <Progress num="60"></Progress>
                    </Grid>

                    <Grid item xs={12} style={{
                        marginTop: 10,
                        marginLeft: 300
                    }}>
                        <div style={{
                                height: 800, 
                                width: 800
                                }}>
                        <PieCharts data={data1} options={options1}></PieCharts>
                        </div>
                    </Grid>
                </Grid>
                </div>
            )}
            </AuthUserContext.Consumer>
        </div>
    )
  }

  export default withFirebase(IndividualPage);