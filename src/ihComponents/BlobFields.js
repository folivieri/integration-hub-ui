import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import {
    TextField,
    Grid,
} from "@mui/material";
import '../App.css';

const BlobFields = (props) => {

    const [formState, setFormState] = useState({});
    const _state = useSelector((state) => state);
    const integration = useState({});

    const setContainerName = event => {
        if (_state.enabledIntegrations && _state.enabledIntegrations.length > 0) {
            _state.enabledIntegrations?.map((element) => {
                if (element.object == props.object) {
                    element.containerName = event.target.value;
                }
            });
        }
        // setFormState({
        //     ..._state,
        //     containerName: event.target.value
        // });
    };

    const setFileName = event => {
        if (_state.enabledIntegrations && _state.enabledIntegrations.length > 0) {
            _state.enabledIntegrations?.map((element) => {
                if (element.object == props.object) {
                    element.filePattern= event.target.value;
                }
            });
        }
        // setFormState({
        //     ..._state,
        //     filePattern: event.target.value
        // });
    };

    useEffect(() => {
        console.log(JSON.stringify(_state[props.partner]));
        if (_state.enabledIntegrations && _state.enabledIntegrations.length > 0) {
            _state.enabledIntegrations?.map((element) => {
                if (element.object == props.object) {
                    integration = element;
                    integration.filePattern= element.filePattern;
                    integration.containerName= element.containerName;
                }
            });
        }
    })

    return ( 
        <td>
        { props.partner === "afs" || props.partner ==="sftp" ? (
               <Grid container direction="row" spacing={3} >
                <Grid item  xs={6}>
                    <TextField
                        type="text"
                        placeholder="containerName/optionalPath"
                        fullWidth
                        label="Container / Path"
                        name="_co"
                        variant="outlined"
                        onChange={setContainerName}
                        value={formState.containerName}
                        required
                    />
                </Grid>
                <Grid item  xs={6}>
                    <TextField
                        type="text"
                        placeholder="syncFile.csv"
                        fullWidth
                        label="File Name"
                        name="_fn"
                        variant="outlined"
                        onChange={setFileName}
                        value={formState.filePattern}
                        required
                    />
                </Grid>
            </Grid>
        ) : null}
        </td>
    );
}

export default BlobFields;