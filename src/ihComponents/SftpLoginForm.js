import React, { useEffect, useState } from 'react';
import {
    Button,
    TextField,
    Grid,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sftpAction } from "../features/iHubSlice";

const SftpLoginForm = (props) => {
    const [state, setState] = useState({ authUser: "sftp", authPW: "$ky#iv3", hostName: "nw4vty7tqj7y4.canadacentral.azurecontainer.io", authflag: 1 });
    const sftp_st = useSelector((state) => state.partnerSystems.sftp);
    const navigate = useNavigate();
    const dispatch = useDispatch(); //dispatcher

    useEffect(() => {
        if (sftp_st) {
            setState(s => ({
                ...s,
                authUser: sftp_st?.authUser,
                authPW: sftp_st?.authPW,
                hostName: sftp_st?.hostName
            }));
        }
    }, [state, sftp_st, sftp_st.authUser, sftp_st.authPW, sftp_st.hostName])


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
        if (state.authUser && state.authPW) {
            dispatch(sftpAction(state));
            navigate("/HCM1Form/sftp");
        } else {
            alert('Incorrect Credentials!: ' + state.username + ":" + state.password);
        }
    }

    return (
        <div>
            <Grid item>
                <form onSubmit={handleSubmit} autoComplete="off" >
                    <Grid container direction="column" spacing={3} sx={{ padding:'20px 200px' }}>
                        <Grid item  xs={6}>
                            <TextField
                                type="text"
                                placeholder="UserName"
                                fullWidth
                                name="authUser"
                                label="User Name"
                                variant="outlined"
                                onChange={setAuthUser}
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
                                name="authPW"
                                variant="outlined"
                                onChange={setAuthPW}
                                value={state.authPW}
                                required
                            />
                        </Grid>
                        <Grid item  xs={6}>
                            <TextField
                                type="text"
                                placeholder="YOURHOST.blob.core.windows.net"
                                fullWidth
                                name="hostName"
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
        </div>
    );

}
export default SftpLoginForm;