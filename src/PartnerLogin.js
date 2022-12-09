import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import AppBottomNavbar from './ihComponents/AppBottomNavbar';
import WorkdayLoginForm from './ihComponents/WorkdayLoginForm';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import PartnerLogo from './ihComponents/PartnerLogo';
import SkyHiveLoginForm from './ihComponents/SkyHiveLoginForm';
import SuccessFactorsForm from './ihComponents/SuccessFactorsForm';
import AzureFileStorageLoginForm from './ihComponents/AzureFileStorageLoginForm';
import SftpLoginForm from './ihComponents/SftpLoginForm';
import PluralsightLoginForm from './ihComponents/PluralsightLoginForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: "50%",
  elevation: '8',
  borderRadius:"3%",
  color: theme.palette.text.secondary,
}));

const PartnerLogin = (props) => {
  const { partner } = useParams();
  return (
    <div>
      <AppNavbar />
      <Box sx={{ margin: '50px' }}>
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center" >
          <Item elevation={8} >
            <Grid item alignContent="center" justify="center" sx={{ margin: '50px' }} xs={12}
            >
              <Grid item>
                <PartnerLogo partner={partner}/>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Grid>
              {partner === "sh" ? (
                  <SkyHiveLoginForm/>) : (partner === "wd" ? (
                    <WorkdayLoginForm/>) : (partner === "sftp" ? (
                      <SftpLoginForm/>) : (partner === "pls" ? (
                      <PluralsightLoginForm/>) : (partner === "sf" ? (
                        <SuccessFactorsForm/>) : (partner === "afs" ? (
                          <AzureFileStorageLoginForm/>) : null)))))}
            </Grid>
          </Item>
        </Grid>
      </Box>
      <AppBottomNavbar />
    </div>
  );
}

export default PartnerLogin;