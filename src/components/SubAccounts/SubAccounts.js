import React, { useState }from 'react';
import EnhancedTable from './EnhancedTable';
import Heading from './Heading';
import {Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './index.css';
import { Add } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import NewGoalPage from './NewGoalPage';

export default function SubAccounts() {

    const [view, setView] = useState("Dashboard");
    const [num, setNum] = useState(0);
    
    const handleMain = () => {
        setView("MainPage");
        setNum(0);
    }

    const handleNewGoal = () => {
        setView("NewGoal");
        setNum(1);
    }
    
    return (
        <div>
            {num === 0 ? (
                <div>
                    <Heading></Heading>
                    
                    <Button variant='contained' className="tooltip" style={{
                        marginBottom: 20,
                        backgroundColor: "#528400",
                        color: 'white',
                    }} onClick={handleNewGoal}> <AddIcon fontSize='medium'></AddIcon>
                        <Typography className="tooltiptext">Add Goal</Typography>
                    </Button>
                    <Button variant='contained' className="tooltip" style={{
                        marginBottom: 20,
                        backgroundColor: "#528400",
                        color: 'white',
                        marginLeft: 20
                    }}>
                        <EditIcon fontSize='medium'></EditIcon>
                        <Typography className="tooltiptext">Edit Goal</Typography>
                    </Button>

                    <EnhancedTable></EnhancedTable>
                </div>
                ) : (
              <     div></div>
                )
            }   
          {num === 1 ? (
              <div>
                  <Button onClick={handleMain} variant="contained">Cancel</Button>
                  <NewGoalPage></NewGoalPage>
              </div>
          ) : (
              <div></div>
          )
          }  
        </div>
    )
}


    
      

