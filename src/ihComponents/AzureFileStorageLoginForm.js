import React, { useEffect, useState } from "react";
import {
    Button,
    TextField,
    Grid,
    Link,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { afsAction } from "../features/iHubSlice";

const AzureFileStorageLoginForm = (props) => {
    const [state, setState] = useState({ authUser: "", authPW: "", hostName: "", authflag: 1 });
    const afs_st = useSelector((state) => state.partnerSystems.afs);
    const navigate = useNavigate();
    const dispatch = useDispatch(); //dispatcher

    useEffect(() => {
        if (afs_st) {
            setState(s => ({
                ...s,
                authUser: afs_st?.authUser,
                authPW: afs_st?.authPW,
                hostName: afs_st?.hostName
            }));
        }
    }, [state, afs_st])

    const setUsername = event => {
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

    const setHostName = event => {
        setState({
            ...state,
            hostName: event.target.value
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (state.authUser && state.authPW) {
            dispatch(afsAction(state));
            navigate("/HCM1Form/afs");
        } else {
            alert('Incorrect Credentials!: ' + state.username + ":" + state.password);
        }
    }

    return (
        <div>
            <Grid item>
                <form onSubmit={handleSubmit} autocomplete="off" >
                    <Grid container direction="column" spacing={3} sx={{ padding:'20px 200px' }}>
                        <Grid item  xs={6}>
                            <TextField
                                type="text"
                                placeholder="UserName"
                                fullWidth
                                name="_un"
                                label="User Name"
                                variant="outlined"
                                onChange={setUsername}
                                value={state.authUser}
                                required
                                autoFocus
                            />
                        </Grid>
                        <Grid item  xs={6}>
                            <TextField
                                type="password"
                                placeholder="Password"
                                label="Password"
                                fullWidth
                                name="_ps"
                                variant="outlined"
                                onChange={setPassword}
                                value={state.authPW}
                                required
                            />
                        </Grid>
                        <Grid item  xs={6}>
                            <TextField
                                type="text"
                                placeholder="YOURHOST.blob.core.windows.net"
                                fullWidth
                                name="_ho"
                                label="Host Name"
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
            <Grid item>
                <Link href="#" variant="body2">
                    Forgot Password?
                </Link>
            </Grid>
        </div>
    );

}
export default AzureFileStorageLoginForm;