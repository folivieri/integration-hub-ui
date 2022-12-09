import React, { useEffect, useState } from 'react';
import '../App.css';
import AppNavbar from '../AppNavbar';
import PartnerLogo from './PartnerLogo';
import AppBottomNavbar from './AppBottomNavbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import {
    Button,
    TextField,
    Grid,
    Typography,
    Box,
    Paper,
    MenuItem,
    Checkbox,
    FormControl
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
    wdAction,
    sfAction,
    afsAction,
    sftpAction,
    plsAction
} from "../features/iHubSlice";
import { Cron } from 'react-js-cron-mui';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HCM1Form = (props) => {
    const { partner } = useParams();
    const [formState, setFormState] = useState({});
    const [dCronValue, setDCronValue] = useState();
    const [lCronValue, setLCronValue] = useState();
    const [laCronValue, setLaCronValue] = useState();
    const [lcCronValue, setLcCronValue] = useState();
    const [wrkrCronValue, setWrkrCronValue] = useState();
    const [dModValue, setDModValue] = useState({});
    const [lModValue, setLModValue] = useState({});
    const [laModValue, setLaModValue] = useState({});
    const [lcModValue, setLcModValue] = useState({});
    const [wrkrModValue, setWrkrModValue] = useState({});
    const [laContainerName, setLaContainerName] = useState();
    const [lcContainerName, setLcContainerName] = useState();
    const [lContainerName, setLContainerName] = useState();
    const [dContainerName, setDContainerName] = useState();
    const [wrkrContainerName, setWrkrContainerName] = useState();
    const [laFileName, setLaFileName] = useState();
    const [lcFileName, setLcFileName] = useState();
    const [lFileName, setLFileName] = useState();
    const [dFileName, setDFileName] = useState();
    const [wrkrFileName, setWrkrFileName] = useState();
    const wd_st = useSelector((state) => state.partnerSystems.wd);
    const sf_st = useSelector((state) => state.partnerSystems.sf);
    const afs_st = useSelector((state) => state.partnerSystems.afs);
    const sftp_st = useSelector((state) => state.partnerSystems.sftp);
    const pls_st = useSelector((state) => state.partnerSystems.pls);
    const clearButtonAction = 'empty'
    const _st = partner === 'wd' ? wd_st :
        (partner === 'sf' ? sf_st :
            (partner === 'pls' ? pls_st :
                (partner === 'afs' ? afs_st :
                    (partner === 'sftp' ? sftp_st : {}))));
    const partnerAction = partner === 'wd' ? wdAction :
        (partner === 'sf' ? sfAction :
            (partner === 'pls' ? plsAction :
                (partner === 'afs' ? afsAction :
                    (partner === 'sftp' ? sftpAction : null))));

    const dispatch = useDispatch(); //dispatcher
    const navigate = useNavigate();

    useEffect(() => {
        let _showDepartments = false;
        let _showLocations = false;
        let _showLearnActivity = false;
        let _showLearnContent = false;
        let _showWorkers = false;
        let _lm, _dm, _lam, _lcm, _wkr;
        if (_st && _st.enabledIntegrations && _st.enabledIntegrations.length > 0) {
            _st.enabledIntegrations?.map((element) => {
                if (element.object === "departments") {
                    setDCronValue(element.cron);
                    setDModValue(element.module);
                    setDContainerName(element.containerName);
                    setDFileName(element.filePattern);
                    _dm = element.module;
                    _showDepartments = true;
                }
                if (element.object === "offices") {
                    setLCronValue(element.cron);
                    setLModValue(element.module);
                    setLContainerName(element.containerName);
                    setLFileName(element.filePattern);
                    _lm = element.module;
                    _showLocations = true;
                }
                if (element.object === "workers") {
                    setWrkrCronValue(element.cron);
                    setWrkrModValue(element.module);
                    setWrkrContainerName(element.containerName);
                    setWrkrFileName(element.filePattern);
                    _wkr = element.module;
                    _showWorkers = true;
                }
                if (element.object === "learning.activity") {
                    setLaCronValue(element.cron);
                    setLaModValue(element.module);
                    setLaContainerName(element.containerName);
                    setLaFileName(element.filePattern);
                    _lam = element.module;
                    _showLearnActivity = true;
                }
                if (element.object === "learning.courses") {
                    setLcCronValue(element.cron);
                    setLcModValue(element.module);
                    setLcContainerName(element.containerName);
                    setLcFileName(element.filePattern);
                    _lcm = element.module;
                    _showLearnContent = true;
                }
            });
        }
        let st = {
            ..._st,
            showDepartments: _showDepartments,
            showLocations: _showLocations,
            showLearningActivity: _showLearnActivity,
            showLearningContent: _showLearnContent,
            showWorkers: _showWorkers,
            laModValue: _lam,
            lcModValue: _lcm,
            lModValue: _lm,
            dModValue: _dm,
            wrkrModValue: _wkr
        };
        setFormState(st);
        console.debug("Initial FormState: \n" + JSON.stringify(st, undefined, 2));
        //console.debug("formState: " + JSON.stringify(formState));
    }, [_st]);

    const handleDeptClick = (e) => {
        let st = { ...formState, showDepartments: e.target.checked };
        setFormState(st);
    }
    const handleLocClick = (e) => {
        let st = { ...formState, showLocations: e.target.checked };
        setFormState(st);
    }
    const handleLaClick = (e) => {
        let st = { ...formState, showLearningActivity: e.target.checked };
        setFormState(st);
    }
    const handleLcClick = (e) => {
        let st = { ...formState, showLearningContent: e.target.checked };
        setFormState(st);
    }
    const handleWrkrClick = (e) => {
        let st = { ...formState, showWorkers: e.target.checked };
        setFormState(st);
    }

    const handleDModChange = (event) => {
        if (event.target !== undefined)
            setDModValue(event.target.value);
    };

    const handleLModChange = (event) => {
        if (event.target !== undefined)
            setLModValue(event.target.value);
    };

    const handleLaModChange = (event) => {
        if (event.target !== undefined)
            setLaModValue(event.target.value);
    };

    const handleWrkrModChange = (event) => {
        if (event.target !== undefined)
            setWrkrModValue(event.target.value);
    };

    const handleLcModChange = (event) => {
        if (event.target !== undefined)
            setLcModValue(event.target.value);
    };//

    const handleDContainerName = (event) => {
        if (event.target !== undefined)
            setDContainerName(event.target.value);
    };

    const handleLContainerName = (event) => {
        if (event.target !== undefined)
            setLContainerName(event.target.value);
    };

    const handleLaContainerName = (event) => {
        if (event.target !== undefined)
            setLaContainerName(event.target.value);
    };

    const handleLcContainerName = (event) => {
        if (event.target !== undefined)
            setLcContainerName(event.target.value);
    };

    const handleWrkrContainerName = (event) => {
        if (event.target !== undefined)
            setWrkrContainerName(event.target.value);
    };//

    const handleDFilePattern = (event) => {
        if (event.target !== undefined)
            setDFileName(event.target.value);
    };

    const handleLFilePattern = (event) => {
        if (event.target !== undefined)
            setLFileName(event.target.value);
    };

    const handleLaFilePattern = (event) => {
        if (event.target !== undefined)
            setLaFileName(event.target.value);
    };

    const handleLcFilePattern = (event) => {
        if (event.target !== undefined)
            setLcFileName(event.target.value);
    };

    const handleWrkrFilePattern = (event) => {
        if (event.target !== undefined)
            setLcFileName(event.target.value);
    };

    const fixEmptyModules = (moduleList) => {
        moduleList.forEach((v) => {
            if (v.module && Object.keys(v.module).length === 0) {
                delete v.module;
            }
        })
    }

    const handleBackButtonClick = async (e) => {
        e.preventDefault();
        let d = { object: 'departments', direction: 'in', module: dModValue, cron: dCronValue, filePattern: dFileName, containerName: dContainerName, format: dFileName?.substring(dFileName.lastIndexOf('.') + 1)};
        let l = { object: 'offices', direction: 'in', module: lModValue, cron: lCronValue, filePattern: lFileName, containerName: lContainerName, format: lFileName?.substring(lFileName.lastIndexOf('.') + 1) };
        let la = { object: 'learning.activity', direction: 'in', module: laModValue, cron: laCronValue, filePattern: laFileName, containerName: laContainerName, format: laFileName?.substring(laFileName.lastIndexOf('.') + 1) };
        let lc = { object: 'learning.courses', direction: 'in', module: lcModValue, cron: lcCronValue, filePattern: lcFileName, containerName: lcContainerName, format: lcFileName?.substring(lcFileName.lastIndexOf('.') + 1) };
        let wk = { object: 'workers', direction: 'in', module: wrkrModValue, cron: wrkrCronValue, filePattern: wrkrFileName, containerName: wrkrContainerName, format: wrkrFileName?.substring(wrkrFileName.lastIndexOf('.') + 1) };
        fixEmptyModules([d, l, la, lc]);
        let ei = [];
        if (formState.showDepartments) {
            ei.push(d);
        }
        if (formState.showLocations) {
            ei.push(l);
        }
        if (formState.showLearningActivity) {
            ei.push(la);
        }
        if (formState.showLearningContent) {
            ei.push(lc);
        }
        if (formState.showWorkers) {
            ei.push(wk);
        }
        let st = { ...formState, enabledIntegrations: ei };
        delete st.showDepartments;
        delete st.showLocations;
        delete st.showLearningActivity;
        delete st.showLearningContent;
        delete st.showWorkers;
        delete st.lModValue;
        delete st.dModValue;
        delete st.lcModValue;
        delete st.laModValue;
        delete st.wrkrModValue;
        delete st.lCronValue;
        delete st.dCronValue;
        delete st.lcCronValue;
        delete st.laCronValue;
        delete st.wrkrCronValue;
        delete st.laContainerName;
        delete st.lcContainerName;
        delete st.lContainerName;
        delete st.dContainerName;
        delete st.wrkrContainerName;
        delete st.laFileName;
        delete st.lcFileName;
        delete st.lFileName;
        delete st.dFileName;
        delete st.wrkrFileName;
        setFormState(st);
        dispatch(partnerAction(st));
        dispatch({ type: 'hydrate' });

        navigate("/Connect");
    }

    const moduleList = () => {
        console.debug("getting menu items for...: " + partner);
        switch (partner) {
            case 'sf':
                return ['FOBusinessUnit', 'FOCompany', 'FODepartment', 'FODivision'];
            case 'wd':
                return ['Human_Resources'];
            case 'pls':
                return ['Content Catalog', 'Skills Assessment Catalog'];
            default:
                return null;
        }
    };

    const partnerHasModule = () => {
        switch (partner) {
            case 'sf':
            case 'wd':
            case 'pls':
                return true;
            default:
                return false;
        }
    };

    return (
        <div>
            <AppNavbar />
            <Box sx={{ margin: '50px' }}>
                <Item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={2}
                        className="login-form"
                    >
                        <Grid item xs={2}>
                            <PartnerLogo partner={partner} />
                        </Grid>
                        <Grid item xs={2} >
                            <Typography component="h1" variant="h5">
                                Configure Integrations
                            </Typography>
                        </Grid>
                        <Grid item xs={2} >
                            <form onSubmit={handleBackButtonClick}>
                                <table className="hcmTable">
                                    <tbody>
                                        {partner !== 'pls' ? (
                                            <tr>
                                                <td>
                                                    <FormControlLabel control={<Checkbox checked={formState.showDepartments === true} onChange={handleDeptClick} />} label="Departments" />
                                                </td>
                                                { partnerHasModule() && formState.showDepartments === true ? (
                                                    <td>
                                                        <TextField sx={{ width: '200px' }}
                                                            value={formState.dModValue}
                                                            select
                                                            required
                                                            label="Module"
                                                            onChange={handleDModChange}
                                                        >
                                                            {moduleList()?.map((option) => (
                                                                <MenuItem sx={{ display: 'block !important' }} key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </td>
                                                ) : null}
                                                {formState.showDepartments === true ? (
                                                    <td>
                                                        <Cron leadingZero={true}
                                                            clearButtonAction={clearButtonAction}
                                                            allowEmpty='never'
                                                            value={dCronValue}
                                                            setValue={setDCronValue} />
                                                    </td>
                                                ) : null}
                                                {formState.queryParams === true ? (
                                                    <td>
                                                        LINKED IN PROPERTIES
                                                    </td>
                                                ) : null}
                                                {formState.showDepartments === true && (partner === "afs" || partner === "sftp") ? (
                                                    <td>
                                                        <Grid container direction="row" spacing={3} >
                                                            <Grid item xs={6}>
                                                                <TextField
                                                                    type="text"
                                                                    placeholder="containerName/optionalPath"
                                                                    fullWidth
                                                                    label="Container / Path"
                                                                    name="_co"
                                                                    variant="outlined"
                                                                    onChange={handleDContainerName}
                                                                    value={dContainerName}
                                                                    required
                                                                />
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <TextField
                                                                    type="text"
                                                                    placeholder="syncFile.csv"
                                                                    fullWidth
                                                                    label="File Name"
                                                                    name="_fn"
                                                                    variant="outlined"
                                                                    onChange={handleDFilePattern}
                                                                    value={dFileName}
                                                                    required
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </td>
                                                ) : null}
                                            </tr>
                                        ) : null}
                                        {partner !== 'pls' ? (
                                            <tr>
                                                <td>
                                                    <FormControlLabel control={<Checkbox checked={formState.showLocations === true} onChange={handleLocClick} />} label="Offices" />
                                                </td>
                                                { partnerHasModule() && formState.showLocations === true ? (
                                                    <td>
                                                        <FormControl>
                                                            <TextField sx={{ width: '200px' }}
                                                                value={formState.lModValue}
                                                                select
                                                                required
                                                                label="Module"
                                                                onChange={handleLModChange}
                                                            >
                                                                {moduleList()?.map((option) => (
                                                                    <MenuItem sx={{ display: 'block !important' }} key={option} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </TextField>
                                                        </FormControl>
                                                    </td>
                                                ) : null}
                                                {formState.showLocations === true ? (
                                                    <td>
                                                        <Cron leadingZero={true}
                                                            value={lCronValue}
                                                            clearButtonAction={clearButtonAction}
                                                            allowEmpty='never'
                                                            setValue={setLCronValue} />
                                                    </td>
                                                ) : null}
                                                {formState.queryParams === true ? (
                                                    <td>
                                                        LINKED IN PROPERTIES
                                                    </td>
                                                ) : null}
                                                {formState.showLocations === true && (partner === "afs" || partner === "sftp") ? (
                                                    <td>
                                                        <Grid container direction="row" spacing={3} >
                                                            <Grid item xs={6}>
                                                                <TextField
                                                                    type="text"
                                                                    placeholder="containerName/optionalPath"
                                                                    fullWidth
                                                                    label="Container / Path"
                                                                    name="_co"
                                                                    variant="outlined"
                                                                    onChange={handleLContainerName}
                                                                    value={lContainerName}
                                                                    required
                                                                />
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <TextField
                                                                    type="text"
                                                                    placeholder="syncFile.csv"
                                                                    fullWidth
                                                                    label="File Name"
                                                                    name="_fn"
                                                                    variant="outlined"
                                                                    onChange={handleLFilePattern}
                                                                    value={lFileName}
                                                                    required
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </td>
                                                ) : null}
                                            </tr>
                                        ) : null}
                                        {( partner === 'wd'  ) ? (
                                        <tr>
                                            <td>
                                                <FormControlLabel control={<Checkbox checked={formState.showWorkers === true} onChange={handleWrkrClick} />} label="Workers" />
                                            </td>
                                            { partnerHasModule() && formState.showWorkers === true ? (
                                                <td>
                                                    <FormControl>
                                                        <TextField sx={{ width: '250px' }} fullWidth
                                                            value={formState.wrkrModValue}
                                                            select
                                                            required
                                                            label="Module"
                                                            onChange={handleWrkrModChange}
                                                        >
                                                            {moduleList()?.map((option) => (
                                                                <MenuItem sx={{ display: 'block !important' }} key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </FormControl>
                                                </td>
                                            ) : null}
                                            {formState.showWorkers === true ? (
                                                <td>
                                                    <Cron leadingZero={true}
                                                        value={wrkrCronValue}
                                                        clearButtonAction={clearButtonAction}
                                                        allowEmpty='never'
                                                        setValue={setWrkrCronValue} />
                                                </td>
                                            ) : null}
                                            {formState.queryParams === true ? (
                                                <td>
                                                    LINKED IN PROPERTIES
                                                </td>
                                            ) : null}
                                            {formState.showWorkers === true && (partner === "afs" || partner === "sftp") ? (
                                                <td>
                                                    <Grid container direction="row" spacing={3} >
                                                        <Grid item xs={6}>
                                                            <TextField
                                                                type="text"
                                                                placeholder="containerName/optionalPath"
                                                                fullWidth
                                                                label="Container / Path"
                                                                name="_co"
                                                                variant="outlined"
                                                                onChange={handleWrkrContainerName}
                                                                value={wrkrContainerName}
                                                                required
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField
                                                                type="text"
                                                                placeholder="syncFile.csv"
                                                                fullWidth
                                                                label="File Name"
                                                                name="_fn"
                                                                variant="outlined"
                                                                onChange={handleWrkrFilePattern}
                                                                value={wrkrFileName}
                                                                required
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </td>
                                            ) : null}
                                        </tr>
                                        ) : null}
                                        {( partner !== 'wd' && partner !== 'sf' ) ? (
                                        <tr>
                                            <td>
                                                <FormControlLabel control={<Checkbox checked={formState.showLearningActivity === true} onChange={handleLaClick} />} label="Learning Activity" />
                                            </td>
                                            { partnerHasModule() && formState.showLearningActivity === true ? (
                                                <td>
                                                    <FormControl>
                                                        <TextField sx={{ width: '250px' }} fullWidth
                                                            value={formState.laModValue}
                                                            select
                                                            required
                                                            label="Module"
                                                            onChange={handleLaModChange}
                                                        >
                                                            {moduleList()?.map((option) => (
                                                                <MenuItem sx={{ display: 'block !important' }} key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </FormControl>
                                                </td>
                                            ) : null}
                                            {formState.showLearningActivity === true ? (
                                                <td>
                                                    <Cron leadingZero={true}
                                                        value={laCronValue}
                                                        clearButtonAction={clearButtonAction}
                                                        allowEmpty='never'
                                                        setValue={setLaCronValue} />
                                                </td>
                                            ) : null}
                                            {formState.queryParams === true ? (
                                                <td>
                                                    LINKED IN PROPERTIES
                                                </td>
                                            ) : null}
                                            {formState.showLearningActivity === true && (partner === "afs" || partner === "sftp") ? (
                                                <td>
                                                    <Grid container direction="row" spacing={3} >
                                                        <Grid item xs={6}>
                                                            <TextField
                                                                type="text"
                                                                placeholder="containerName/optionalPath"
                                                                fullWidth
                                                                label="Container / Path"
                                                                name="_co"
                                                                variant="outlined"
                                                                onChange={handleLaContainerName}
                                                                value={laContainerName}
                                                                required
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField
                                                                type="text"
                                                                placeholder="syncFile.csv"
                                                                fullWidth
                                                                label="File Name"
                                                                name="_fn"
                                                                variant="outlined"
                                                                onChange={handleLaFilePattern}
                                                                value={laFileName}
                                                                required
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </td>
                                            ) : null}
                                        </tr>
                                        ) : null}
                                        {( partner !== 'wd' && partner !== 'sf' ) ? (
                                        <tr>
                                            <td>
                                                <FormControlLabel control={<Checkbox checked={formState.showLearningContent === true} onChange={handleLcClick} />} label="Learning Courses" />
                                            </td>
                                            { partnerHasModule() && formState.showLearningContent === true ? (
                                                <td>
                                                    <FormControl>
                                                        <TextField sx={{ width: '200px' }}
                                                            value={formState.lcModValue}
                                                            select
                                                            required
                                                            label="Module"
                                                            onChange={handleLcModChange}
                                                        >
                                                            {moduleList()?.map((option) => (
                                                                <MenuItem sx={{ display: 'block !important' }} key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </FormControl>
                                                </td>
                                            ) : null}
                                            {formState.showLearningContent === true ? (
                                                <td>
                                                    <Cron leadingZero={true}
                                                        value={lcCronValue}
                                                        clearButtonAction={clearButtonAction}
                                                        allowEmpty='never'
                                                        setValue={setLcCronValue} />
                                                </td>
                                            ) : null}
                                            {formState.queryParams === true ? (
                                                <td>
                                                    LINKED IN PROPERTIES
                                                </td>
                                            ) : null}
                                            {formState.showLearningContent === true && (partner === "afs" || partner === "sftp") ? (
                                                <td>
                                                    <Grid container direction="row" spacing={3} >
                                                        <Grid item xs={6}>
                                                            <TextField
                                                                type="text"
                                                                placeholder="containerName/optionalPath"
                                                                fullWidth
                                                                label="Container / Path"
                                                                name="_co"
                                                                variant="outlined"
                                                                onChange={handleLcContainerName}
                                                                value={lcContainerName}
                                                                required
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField
                                                                type="text"
                                                                placeholder="syncFile.csv"
                                                                fullWidth
                                                                label="File Name"
                                                                name="_fn"
                                                                variant="outlined"
                                                                onChange={handleLcFilePattern}
                                                                value={lcFileName}
                                                                required
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </td>
                                            ) : null}
                                        </tr>
                                        ) : null}
                                        <tr >
                                            <td colSpan="3" className="operation">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className="button-block"
                                                >
                                                    Back
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </Grid>
                    </Grid>
                </Item>
            </Box>
            <AppBottomNavbar />
        </div>
    );
}

export default HCM1Form;