import React, { useEffect, useState } from 'react';
import {
    Button,
    TextField,
    Grid,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sfAction } from "../features/iHubSlice";

const SuccessFactorsForm = (props) => {
    const [state, setState] = useState({ authUser: "sfadmin@SFCPART000748", authPW: "SkyHiveEC123", hostName: "apisalesdemo8.successfactors.com", authflag: 1 });
    const sf_st = useSelector((state) => state.partnerSystems.sf);
    const navigate = useNavigate();
    const dispatch = useDispatch(); //dispatcher

    useEffect(() => {
        if (sf_st) {
            setState(s => ({
                ...s,
                authUser: sf_st?.authUser,
                authPW: sf_st?.authPW,
                hostName: sf_st?.hostName
            }));
        }
    }, [state, sf_st ])

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

    const setHostName = event => {
        setState({
            ...state,
            hostName: event.target.value
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (state.authUser  && state.authPW ) {
            dispatch(sfAction(state));
            navigate("/HCM1Form/sf");
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
                                placeholder="UserName"
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
export default SuccessFactorsForm;