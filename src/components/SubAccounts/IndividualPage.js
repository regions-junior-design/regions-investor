import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import PieCharts from "../Dashboard/PieCharts";
import Progress from "../Dashboard/Progress";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";

// First Pie Chart data
const data1 = {
    labels: ["GOOG", "SBUX", "EFX"],
    datasets: [
        {
            data: [30, 50, 20],
            backgroundColor: ["#47c3d4", "#cc4e00", "#ffc425"],
            hoverBackgroundColor: ["#47c3d4", "#cc4e00", "#ffc425"],
        },
    ],
};

// First Pie Chart Options
const options1 = {
    legend: {
        position: "bottom",
        labels: {
            fontSize: 20,
        },
    },
    title: {
        display: true,
        position: "top",
        fontSize: 24,
        text: "Distribution of funds",
    },
};

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
    const [currentAccValue, setcurrentAccValue] = useState(0);
    const [goal, setGoal] = useState(0);
    const [price, setPrice] = useState(0);
    const [plan, setPlan] = useState({});

    //if you need to creat a dropdown menu this function convert the plans variable to list
    const convertObjtoList = (object) => {
        const objectList = Object.keys(object).map((key) => ({
            ...object[key],
            uid: key,
        }));
        return objectList;
    };

    const onListenForSubAccounts = () => {
        props.firebase
            .mainAccount(props.authUser.uid, props.selected[0])
            .on("value", (snapshot) => {
                const accountObject = snapshot.val();
                console.log("accountOBject");
                console.log(accountObject);
                setcurrentAccValue(accountObject.currentAccountValue);
                setGoal(accountObject.goalAmount);
            });
        props.firebase.plans(props.authUser.uid).on("value", (snapshot) => {
            const planobject = snapshot.val();
            console.log("planobject222trinh");
            console.log(planobject);
            if (planobject) {
                setPlan(planobject);
            }
        });
    };
    const handleNewPlan = (id) => {
        plan[id].holdings.map((v) => {
            return getPrice(v).then((price) => {
                console.log(v + ":" + price);
            });
        });
    };
    window.handleNewPlan = handleNewPlan;

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
                                    Total Subaccount Value: ${" "}
                                    {currentAccValue ? currentAccValue : 0}{" "}
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
                                    Progress to Goal: $ {goal ? goal : 0}
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

                            <Grid
                                item
                                xs={12}
                                style={{
                                    marginTop: 10,
                                    marginLeft: 300,
                                }}
                            >
                                <div
                                    style={{
                                        height: 800,
                                        width: 800,
                                    }}
                                >
                                    <PieCharts
                                        data={data1}
                                        options={options1}
                                    ></PieCharts>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </AuthUserContext.Consumer>
        </div>
    );
}

export default withFirebase(IndividualPage);
