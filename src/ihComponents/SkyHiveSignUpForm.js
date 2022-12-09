import React, { useState } from "react";
import {
    Button,
    TextField,
    Grid,
    Typography
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { shAction } from "../features/iHubSlice";
import PartnerLogo from './PartnerLogo';
import { updateState } from "../features/iHubSlice";
import { AdminApi } from "../features/api/AdminApi";

const SkyHiveSignUpForm = (sh) => {
    const [state, setState] = useState({ customerName: "", authUser: "", authPw: "", authflag: 1 });
    const navigate = useNavigate();
    const dispatch = useDispatch(); //dispatcher
    var api = new AdminApi();

    const setAuthUser = event => {
        setState({
            ...state,
            authUser: event.target.value
        });
    };

    const setPassword = event => {
        setState({
            ...state,
            authPw: event.target.value
        });
    };

    const setCustomerName = event => {
        setState({
            ...state,
            customerName: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        api.createIntegrationCustomer(state, (error, data, response) => {
            if(error) {
                console.error("error:", error);
                alert('Incorrect Credentials!: ' + state.authUser + ":" + state.authPw);
                return;
            }
            //console.log("data:", JSON.stringify(data, null, 2));
            dispatch(updateState(data));
            navigate("/Connect");
        })
    }

    return (

        <div>
            <Grid item>
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={5} sx={{ padding: '15px 100px' }}>

                        <Grid item>
                            <PartnerLogo partner="sh" />
                        </Grid>
                        <Grid item>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="text"
                                placeholder="Company Name"
                                label="Company Name"
                                fullWidth
                                name="customerName"
                                variant="outlined"
                                onChange={setCustomerName}
                                value={state.customerName}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="text"
                                placeholder="UserName"
                                label="UserName"
                                fullWidth
                                name="authUser"
                                variant="outlined"
                                onChange={setAuthUser}
                                value={state.authUser}
                                required
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="password"
                                placeholder="Password"
                                label="Password"
                                fullWidth
                                name="password"
                                variant="outlined"
                                onChange={setPassword}
                                value={state.authPw}
                                required
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="button-block"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </div>
    );

}
//export default SkyHiveSignUpForm;

const mapDispatchToProps = {
    shAction
}

const mapStateToProps = state => ({
    sh: state.partnerSystems.sh
});

export default connect(mapStateToProps, mapDispatchToProps)(SkyHiveSignUpForm);