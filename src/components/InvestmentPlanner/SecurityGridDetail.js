import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Typography, ListItem } from "@material-ui/core";
import List from '@material-ui/core/List';

function SecurityGridDetail(props) {
    // console.log(props.authUser)
    const [name, setName] = useState("");
    const [goal, setGoal] = useState(0);
    const [desc, setDesc] = useState("");
    const [init, setInit] = useState(0);
    const [date, setDate] = useState("");
    const [type, setType] = useState("");


    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography gutterBottom variant="h3">
                  Social Media
                </Typography>
                <Typography variant="body2" gutterBottom>
                  A collection of comapanies who exposed to the social media landscape either directly through owning their own platforms or indirectly by providing
                  the services to maintain and grow these operations
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Current Holdings
                </Typography>
                <List>
                    <ListItem>Facebook</ListItem>
                    <ListItem>Snap</ListItem>
                    <ListItem>Twitter</ListItem>
                    <ListItem>Tencent</ListItem>
                    <ListItem>Alibaba</ListItem>
                    <ListItem>Alphabet</ListItem>
                    <ListItem>Microsoft</ListItem>
                </List>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default SecurityGridDetail
