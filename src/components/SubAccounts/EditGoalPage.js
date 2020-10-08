import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { withFirebase } from "../Firebase";

function EditGoalPage(props) {
    // console.log(props.authUser)
    const [name, setName] = useState("");
    const [goal, setGoal] = useState(0);
    const [desc, setDesc] = useState("");
    const [init, setInit] = useState(0);
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    console.log("Select" + props.selected[0]);
    const updateData = (e) => {
        props.firebase.updateSubAcc(
            {
                goalAmount: goal || "",
                description: desc || "",
                goalDate: date || "",
                investmentStyle: type || "",
            },
            props.authUser.uid,
            props.selected[0]
        );
        props.back();
    };
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="goal"
                        name="goal"
                        label="New Goal Ammount"
                        onChange={(e) => setGoal(e.target.value)}
                        fullWidth
                        type="number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="desc"
                        name="desc"
                        label="New Goal Description"
                        onChange={(e) => setDesc(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="date"
                        onChange={(e) => setDate(e.target.value)}
                        name="date"
                        label=" New Goal Date"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="type-label">New Plan</InputLabel>
                        <Select
                            labelId="type-label"
                            id="type"
                            onChange={(e) => setType(e.target.value)}
                        >
                            <MenuItem value={"None"}>None</MenuItem>
                            <MenuItem value={"Conservative"}>
                                Conservative
                            </MenuItem>
                            <MenuItem value={"Moderate"}>Moderate</MenuItem>
                            <MenuItem value={"Aggresive"}>Aggresive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={updateData}
                    >
                        Create Goal
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default withFirebase(EditGoalPage);
