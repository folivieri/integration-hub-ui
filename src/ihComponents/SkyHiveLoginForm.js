import React, { useState } from "react";
import {
    Button,
    TextField,
    Grid,
    Link,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { updateState } from "../features/iHubSlice";
import { AdminApi } from "../features/api/AdminApi";

const SkyHiveLoginForm = (sh) => {
    const [state, setState] = useState({ authUser: "Integrations-user@skyhive.io", authPW: "Skyhive@123!", customerId: null });

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
            authPW: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        api.login(state, (error, data, response) => {
            if(error) {
                console.error("error:", error);
                alert('Incorrect Credentials!: ' + state.authUser + ":" + state.authPW);
                return;
            }
            console.log("state:", JSON.stringify(state, null, 2));
            console.log("data:", JSON.stringify(data, null, 2));
            dispatch(updateState(data));
            console.log("response:", response);
            navigate("/Connect");
        })
    }

    return (

        <div>
            <Grid item>
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={6} sx={{ padding: '20px 200px' }}>
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
                                name="authPW"
                                variant="outlined"
                                onChange={setPassword}
                                value={state.authPW}
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
            <Grid item>
                <Link href="#" variant="body2">
                    Forgot Password?
                </Link>
            </Grid>
        </div>
    );

}

const mapDispatchToProps = {
    updateState
}

const mapStateToProps = state => ({
    sh: state.sh
});

export default connect(mapStateToProps, mapDispatchToProps)(SkyHiveLoginForm);