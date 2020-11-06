import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import { schemeCategory10 } from "d3-scale-chromatic";
import React, { useEffect, useState } from "react";
import { theme } from "../../MaterialUITheme";
import Chart from "./Chart";
import PieCharts from "./PieCharts";
import Progress from "./Progress";

const useStyles = makeStyles((theme) => ({
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function Dashboard(props) {
    const classes = useStyles();

    // First Pie Chart data

    const [data1, setData1] = useState({
        labels: ["Automobile", "Travel", "Home"],
        datasets: [
            {
                data: [30, 50, 100],
                backgroundColor: ["#47c3d4", "#cc4e00", "#ffc425"],
                hoverBackgroundColor: ["#47c3d4", "#cc4e00", "#ffc425"],
            },
        ],
    });

    const [progressData, setProgressData] = useState([
        { name: "Test", data: 10 },
    ]);
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
            text: "Goal distribution",
        },
    };

    useEffect(() => {
        props.firebase
            .mainAccounts(props.authUser.uid)
            .once("value")
            .then((snapshot) => {
                const messageObject = snapshot.val();

                if (messageObject) {
                    const messageList = Object.keys(messageObject).map(
                        (key) => ({
                            ...messageObject[key],
                            uid: key,
                        })
                    );
                    const sorted = [...messageList].sort(
                        (a, b) => -a.currentAccountValue + b.currentAccountValue
                    );
                    console.log(sorted);
                    let data = sorted.map((key) => key.currentAccountValue);
                    let label = sorted.map((key) => key.name);
                    if (data.length > 10) {
                        const other = data.slice(9).reduce((p, v) => p + v);
                        console.log(data);
                        console.log(other);
                        data = data.slice(0, 10);
                        label = label.slice(0, 10);
                        data[9] = other;
                        label[9] = "Other";
                    }
                    setProgressData(
                        sorted.map((v) => {
                            const data =
                                (v.currentAccountValue / v.goalAmount) * 100
                                    ? Math.min(
                                          (v.currentAccountValue /
                                              v.goalAmount) *
                                              100,
                                          100
                                      )
                                    : 100;
                            return {
                                name: v.name,
                                data: data,
                            };
                        })
                    );
                    setData1({
                        labels: label,
                        datasets: [
                            {
                                data: data.slice(0, Math.min(data.length, 9)),
                                backgroundColor: schemeCategory10.slice(
                                    0,
                                    Math.min(data.length, 9)
                                ),
                                hoverBackgroundColor: schemeCategory10.slice(
                                    0,
                                    Math.min(data.length, 9)
                                ),
                            },
                        ],
                    });
                }
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container alignItems="left">
                        <Grid item xs={9} className="scroll-container">
                            <Chart />
                            <div
                                id="pie-chart-area"
                                style={{
                                    borderStyle: "solid",
                                    borderColor: "#88bb00",
                                    borderWidth: 3,
                                    marginLeft: 140,
                                    marginTop: 140,
                                    borderRadius: "13px",
                                    width: 1200,
                                    height: 600,
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    style={{
                                        marginLeft: 460,
                                        marginBottom: 20,
                                        marginTop: 30,
                                        backgroundColor: "#528400",
                                        padding: 10,
                                        width: 290,
                                        color: "white",
                                    }}
                                >
                                    Goal Breakdown
                                </Typography>
                                <Grid
                                    container
                                    spacing={3}
                                    style={{
                                        marginTop: 10,
                                        width: 950,
                                        marginLeft: -60,
                                    }}
                                >
                                    <Grid item sm={6}>
                                        <div
                                            id="chart-1"
                                            style={{
                                                height: 800,
                                                width: 800,
                                                marginLeft: "250px"
                                            }}
                                        >
                                            <PieCharts
                                                data={data1}
                                                options={options1}
                                            />
                                        </div>
                                    </Grid>

                                    <Grid item xs={12} style={{
                                        marginLeft: 50
                                    }}>
                                        <Typography
                                            variant="h2"
                                            style={{
                                                marginTop: -250,
                                                marginLeft: 370,
                                            }}
                                        >
                                            Goal Progress Breakdown
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            style={{
                                                marginTop: 10,
                                                marginLeft: 180,
                                                width: 1000,
                                            }}
                                        >
                                            <InfoIcon
                                                fontSize="medium"
                                                style={{
                                                    marginRight: 10,
                                                }}
                                            ></InfoIcon>
                                            The progress bars below show you
                                            your progress towards your
                                            individual goals.
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container sm={12} style={{
                                    marginBottom: 200,
                                    marginTop: -130,
                                    marginLeft: 50
                                }}>
                                    {progressData.map((v) => {
                                        const name = v.name;
                                        return (
                                            <Grid item sm={6}>
                                                <div style={{
                                                    marginBottom: 50
                                                }}>
                                                    <Typography
                                                        variant="h4"
                                                        style={{
                                                            marginBottom: 10,
                                                        }}
                                                    >
                                                        {v.name}
                                                    </Typography>
                                                    <Progress
                                                        num={v.data}
                                                    ></Progress>
                                                </div>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}
