import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import AppBottomNavbar from './ihComponents/AppBottomNavbar';
import SkyHiveSignUpForm from './ihComponents/SkyHiveSignUpForm';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SkyHiveLogin = (props) => {
  const { partner } = useParams();
  return (
    <div>
      <AppNavbar/>
      <Box sx={{ margin: '50px'}}>
        <Grid container 
              direction="row"
              justifyContent="center"
              alignItems="center" >
          <Item>            
            <SkyHiveSignUpForm/>
          </Item>
        </Grid>
      </Box>
      <AppBottomNavbar/>
    </div>
  );
}

export default SkyHiveLogin;