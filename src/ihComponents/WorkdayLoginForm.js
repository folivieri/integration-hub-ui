import React, { useEffect, useState } from 'react';
import {
    Button,
    TextField,
    Grid,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { wdAction } from "../features/iHubSlice";

const WorkdayLoginForm = (props) => {
    const [state, setState] = useState({ authUser: "ISU SkyHive@skyhive_dpt1", authPW: "Sk6H8v3!", tenantId: "skyhive_dpt1", hostName: "wd2-impl-services1.workday.com", apiVersion: "v1.0", authflag: 1 });
    const wd_st = useSelector((state) => state.partnerSystems.wd);
    const navigate = useNavigate();
    const dispatch = useDispatch(); //dispatcher

    useEffect(() => {
        if (wd_st) {
            setState(s => ({
                ...s,
                authUser: wd_st?.authUser,
                authPW: wd_st?.authPW,
                hostName: wd_st?.hostName,
                apiVersion: wd_st?.apiVersion
            }));
        }
    }, [state, wd_st ])

    const setAuthUser = event => {
        setState({
            ...state,
            authUser: event.target.value
        });
    };

    const setAuthPW = event => {
        setState({
            ...state,
            authPW: event.target.value
        });
    };

    const setTenantId = event => {
        setState({
            ...state,
            tenantId: event.target.value
        });
    };

    const setHostName = event => {
        setState({
            ...state,
            hostName: event.target.value
        });
    };

    const setApiVersion = event => {
        setState({
            ...state,
            apiVersion: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (state.authUser  && state.authPW) {
            dispatch(wdAction(state));
            navigate("/HCM1Form/wd");
        } else {
            alert('Incorrect Credentials!: ' + state.authUser + ":" + state.authPW);
        }
    }

    return (
        <div>
            <Grid item>
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={3} sx={{ padding: '20px 200px' }}>
                        <Grid item xs={6}>
                            <TextField
                                type="text"
                                placeholder="username"
                                label="User Name"
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
                                onChange={setAuthPW}
                                value={state.authPW}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="text"
                                placeholder="Tenant Id"
                                label="Tenant Id"
                                fullWidth
                                name="tenantId"
                                variant="outlined"
                                onChange={setTenantId}
                                value={state.tenantId}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="text"
                                placeholder="Host Name"
                                label="Host Name"
                                fullWidth
                                name="hostName"
                                variant="outlined"
                                onChange={setHostName}
                                value={state.hostName}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="text"
                                placeholder="Api Version"
                                label="Api Version"
                                fullWidth
                                name="apiVersion"
                                variant="outlined"
                                onChange={setApiVersion}
                                value={state.apiVersion}
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
export default WorkdayLoginForm;