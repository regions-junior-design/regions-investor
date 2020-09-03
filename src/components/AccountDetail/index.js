import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

export default function AddressDetailBase(props) {
    console.log(props.authUser)
    const [name_f,setNamef] = useState(props.authUser.name_f)
    const [name_l,setNamel] = useState(props.authUser.name_l)
    const [address1,setAdd1] = useState(props.authUser.add1)
    const [address2,setAdd2] = useState(props.authUser.add2)
    const [city,setCity] = useState(props.authUser.city)
    const [state,setState] = useState(props.authUser.state)
    const [zipcode,setZip] = useState(props.authUser.zip)
    const [phone,setPhone] = useState(props.authUser.phone)
    const [country,setCountry] = useState(props.authUser.country)
    const updateData = (e) =>{
        props.firebase.updateAccountDetail(
            {
                name_f: name_f || "",
                name_l: name_l || "",
                add1: address1 || "",
                add2: address2 || "",
                city: city || "",
                state: state || "",
                zip: zipcode || "",
                country: country || "",
                phone: phone || ""
            }, 
            props.authUser.uid)
    }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account Detail
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            defaultValue={name_f}
            onChange={(e) => setNamef(e.target.value)}
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            onChange={(e) => setNamel(e.target.value)}
            defaultValue={name_l}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            onChange={(e) => setAdd1(e.target.value)}
            defaultValue={address1}
            fullWidth
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            defaultValue={address2}
            onChange={(e) => setAdd2(e.target.value)}
            fullWidth
            autoComplete="address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={(e) => setCity(e.target.value)}
            defaultValue={city}
            fullWidth
            autoComplete="address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" 
            onChange={(e) => setState(e.target.value)}
            defaultValue={state}
            name="state"
           label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            onChange={(e) => setZip(e.target.value)}
            defaultValue={zipcode}
            fullWidth
            autoComplete="postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            onChange={(e) => setCountry(e.target.value)}
            defaultValue={country}
            fullWidth
            autoComplete="country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone number"
            onChange={(e) => setPhone(e.target.value)}
            defaultValue={phone}
            fullWidth
            autoComplete="phone"
          />
        </Grid>
        <Grid item xs={12}>
       <Button
         type="button"
         variant="contained"
         color="primary"
         size="medium"
         onClick={updateData}
       >
        Save Changes
       </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}