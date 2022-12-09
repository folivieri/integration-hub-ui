import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import AppNavbar from './AppNavbar';
import AppBottomNavbar from './ihComponents/AppBottomNavbar';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HistoryTable from './ihComponents/HistoryTable';
import PartnerLogo from './ihComponents/PartnerLogo';
import { useNavigate } from 'react-router-dom';


const History = (props) => {
    const { partner } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <AppNavbar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center" item xs={12}>
                        <Grid item sx={{ textAlign: 'center', marginTop: '32px' }} >
                <PartnerLogo partner={partner}/>
                            <Typography color="primary" variant="h4" component="div" >
                                <b>Integration Hub Sync History</b>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item
                        justifyContent="center"
                        alignItems="center"
                        xs={8}>
                        <HistoryTable partner={partner} />        
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Button size="large" LinkComponent={Link} to={"/Connect"}
                        variant="contained"
                    >
                        Back
                    </Button>
                </Grid>
            </Box>
            <AppBottomNavbar />
        </div>
    );
}

export default History;