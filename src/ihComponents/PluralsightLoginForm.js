import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    Button,
    TextField,
    Grid,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { plsAction } from "../features/iHubSlice";

const PluralsightLoginForm = (props) => {
    const [state, setState] = useState({ apiKey: "c2t5aGl2ZS10ZWNobm9sb2dpZXMtaG9sZGluZ3MtaW5jLWIxZjQ4-9158d0b3aae54f68a8479442e8dc72d8-UExBTg==", authflag: 1 });
    const pls_st = useSelector((state) => state.partnerSystems.pls);
    const navigate = useNavigate();
    const dispatch = useDispatch(); //dispatcher

    useEffect(() => {
        if (pls_st) {
            setState(s => ({
                ...s,
                apiKey: pls_st?.apiKey
            }));
        }
    }, [state, pls_st])

    const setApiKey = event => {
        setState({
            ...state,
            apiKey: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
            dispatch(plsAction(state));
            navigate("/HCM1Form/pls");
    }

    return (
        <div>
            <Grid item>
                <form onSubmit={handleSubmit} autoComplete="off" >
                    <Grid container direction="column" spacing={3} sx={{ padding:'20px 200px' }}>
                        <Grid item  xs={6}>
                            <TextField
                                type="text"
                                placeholder="you-api-key-here"
                                fullWidth
                                name="apiKey"
                                label="API Key"
                                variant="outlined"
                                onChange={setApiKey}
                                value={state.apiKey}
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
export default PluralsightLoginForm;