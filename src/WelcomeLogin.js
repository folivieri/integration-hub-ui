import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import AppBottomNavbar from './ihComponents/AppBottomNavbar';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ihLogo from './integrationHubLogo.png';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



const WelcomeLogin = () => {
  return (
    <div>
      <AppNavbar/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container 
              direction="row"
              justifyContent="center"
              alignItems="center" 
              spacing={2}>
          <Grid container
              direction="column"
              justifyContent="center"
              alignItems="center"  item xs={12}>
            <Grid item sx={{textAlign: 'center', marginTop: '32px'}} >
              <Typography color="primary" variant="h2" component="div" >
              <b>Welcome to Integration Hub</b>
              </Typography>
              <Typography color="secondary" variant="h5" component="div" >
              <b>Powered by SkyHive.</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid item
              justifyContent="center"
              alignItems="center" 
              xs={4}>
            <Grid item sx={{textAlign: 'center', margin: '50px'}}  >
              <Button  component={Link} to={"/PartnerLogin/sh"} sx={{ color: '#FFFFFF', borderRadius: 20, width: '255px', }} color="primary" variant="contained">Login</Button>
            </Grid>
            <Grid item sx={{textAlign: 'center', margin: '50px'}}  >
              <Button  component={Link} to={"/SkyHiveSignUp"} sx={{ color: '#FFFFFF', borderRadius: 20, width: '255px', }} color="secondary" variant="contained">Sign Up</Button>
            </Grid>

          </Grid>
          <Grid item xs={4}>
            <img src={ihLogo} className="App-logo-lg" alt="logo" />
          </Grid>
        </Grid>
      </Box>
      <AppBottomNavbar/>
    </div>
  );
}

export default WelcomeLogin;