import React, { useEffect, useState } from 'react';
import { withFirebase } from '../Firebase';
import Grid from '@material-ui/core/Grid';
import {Typography, Button } from '@material-ui/core';
import { AuthUserContext } from '../Session';
import Progress from '../Dashboard/Progress';
import PieCharts from '../Dashboard/PieCharts';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TickerTable from './TickerTable';

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

function getPrice(ticker) {
    var myHeaders = new Headers();
    myHeaders.append(
        "x-rapidapi-host",
        "apidojo-yahoo-finance-v1.p.rapidapi.com"
    );
    myHeaders.append(
        "x-rapidapi-key",
        "126bfc9c2dmsh8f0b0ab05eac01fp1a710bjsna04479d10daf"
    );

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    return fetch(
        `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=${ticker}&region=US`,
        requestOptions
    )
        .then((response) => response.json())
        .then(
            (result) =>
                (result.quoteResponse.result[0].bid +
                    result.quoteResponse.result[0].ask) /
                2
        )
        .catch((error) => console.log("error", error));
}


function IndividualPage(props) {
    const [currAcc, setCurrAcc] = useState({})
    const [currentAccValue, setcurrentAccValue ] = useState(0)
    const [goal, setGoal ] = useState(0)
    
    const [plan,setPlan] = useState({empty: true});
    const [plans,setPlans] = useState([]);
    const [loaded,setLoaded] = useState(false);
    const [ready,setReady] = useState(true);

    const [variant, setVariant] = useState("contained");

    // console.log(props);

    if(!loaded) {
        let ls = [];
        props.firebase.plans(props.authUser.uid).once('value').then( v => {
            let p = v.val();
            console.log(p);
            let ls = []
            for(var value in p){
                ls.push ({value: p[value], planUID: value})
            }
            setPlans(ls);
            // console.log(ls);
        })
        setLoaded(true);
    }

    const onListenForSubAccounts = () => { 
        props.firebase
        .mainAccount(props.authUser.uid, props.selected[0] )
        .on('value', snapshot => {
            const accountObject = snapshot.val();
            console.log("accountOBject")
            console.log(accountObject)
            setCurrAcc(accountObject);
            setcurrentAccValue(accountObject.currentAccountValue)
            setGoal(accountObject.goalAmount)
                
        });
    }
    
    
      useEffect(() => { 
          onListenForSubAccounts();
      }, [])

      const handleApply = (e) => {
        console.log(plan);
        console.log(currAcc);

        var updates = {};
        updates['planApplied'] = plan;
        var ls = [];
        let ammountPerTicker = currentAccValue/plan.value.holdings.length;
        const requests = plan.value.holdings.map((ticker) => {
            // console.log(ticker);
            return getPrice(ticker).then((price) => {
                // console.log(ticker, price);
                let num = ammountPerTicker/price;
                ls.push({ticker: ticker, purchasePrice: price, numShares: num})
            }); 
        });

        Promise.all(requests).then(() => {
            updates['holdings'] = ls;
            console.log(ls);
            props.firebase.mainAccount(props.authUser.uid, props.selected[0]).update(updates);
        });
      }

    //   const checkReady = () => {
    //     if (plan.empty) {
    //         setReady(false);
    //     }
    //     else {
    //         setReady(true);
    //     };
    //   }


    useEffect(() => {
        onListenForSubAccounts();
    }, []);

    return (
        <div>
            <AuthUserContext.Consumer>
                {(authUser) => (
                    <div>
                        <Grid container spacing={3} alignItems="center">
                            <Grid
                                item
                                xs={12}
                                style={{
                                    marginLeft: 500,
                                }}
                            >
                                <Typography variant="h1"></Typography>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                style={{
                                    marginLeft: 490,
                                    marginTop: 10,
                                    marginBottom: 20
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    style={{
                                        borderStyle: "solid",
                                        borderColor: "#88bb00",
                                        borderWidth: 10,
                                        padding: 10,
                                        width: 460,
                                    }}
                                >
                                    Total Subaccount Value: ${goal ? goal : 0}
                                </Typography>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                style={{
                                    marginLeft: 610,
                                    marginTop: -10,
                                }}
                            >
                                <Typography variant="h4">
                                    Progress to Goal: $ {" "}
                                    {currentAccValue ? currentAccValue : 0}{" "}
                                </Typography>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                style={{
                                    marginLeft: 470,
                                    marginTop: -10,
                                }}
                            >
                                <Progress num="60"></Progress>
                            </Grid>
                    <Grid item style={{
                        marginLeft: 380, 
                        marginTop: 40,
                        borderStyle: "solid",
                        borderColor: "#88bb00",
                        borderWidth: 3,
                        width: 700,
                        height: 200
                    }}>
                        <Typography variant="h4" style={{
                            marginLeft: 140
                        }}
                        >
                            Pick an investment plan to apply to this goal.</Typography>
                        <FormControl style={{
                            marginLeft: 270
                        }}>
                            <InputLabel id="type-label">Select Plan</InputLabel>
                            <Select
                            labelId="type-label"
                            id="type"
                            onChange={(e) => {
                                setPlan(plans[e.target.value]);
                                // checkReady();
                            }}
                            >
                            {plans.map((item, i) => 
                                // console.log(item, i);
                                <MenuItem value={i}>{item.value.name}</MenuItem>
                            )}
                            </Select>
                            <br></br>
                            <Button
                                variant="contained"
                                className="tooltip"
                                style={{
                                    marginBottom: 20,
                                    backgroundColor:
                                        "#528400",
                                    color: "white",
                                }}
                                onClick={handleApply}
                                // disabled={ready}
                            >Apply Plan</Button>
                        </FormControl>
                        
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

                <Grid>
                    
                </Grid>
                </div>
            )}
            </AuthUserContext.Consumer>
        </div>
    );
}

export default withFirebase(IndividualPage);
