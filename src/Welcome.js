import React, { useEffect, useState } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import AppBottomNavbar from './ihComponents/AppBottomNavbar';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ihLogo from './integrationHubLogo.png';
import sftpLogoPng from './icons/sftp.png';
import sftpLogoCheck from './icons/sftp-check.png';
import azureLogo from './icons/azureStorage.png';
import azureLogoCheck from './icons/azureStorage-check.png';
import successFactorsLogo from './icons/successFactors.png';
import shellLogo from './icons/shell.png';
import successFactorsLogoCheck from './icons/successFactors-check.png';
import workdayLogo from './icons/workday.png';
import workdayLogoCheck from './icons/workday-check.png';
import pluralsightLogo from './icons/pluralsight.png';
import pluralsightLogoCheck from './icons/pluralsight-check.png';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Stack from '@mui/material/Stack';

const Welcome = () => {
  const [wdLogo, setWdLogo] = useState({});
  const [wdLink, setWdLink] = useState({});
  const [sfLogo, setSfLogo] = useState({});
  const [sfLink, setSfLink] = useState({});
  const [sftpLink, setSftpLink] = useState({});
  const [sftpLogo, setSftpLogo] = useState({});
  const [afsLogo, setAfsLogo] = useState({});
  const [afsLink, setAfsLink] = useState({});
  const [plsLogo, setPlsLogo] = useState({});
  const [plsLink, setPlsLink] = useState({});

  const [wdAuth, setWdAuth] = useState();
  const [sfAuth, setSfAuth] = useState();
  const [sftpAuth, setSftpAuth] = useState();
  const [afsAuth, setAfsAuth] = useState();
  const [plsAuth, setPlsAuth] = useState();

  const [wdHist, setWdHist] = useState();
  const [sfHist, setSfHist] = useState();
  const [sftpHist, setSftpHist] = useState();
  const [afsHist, setAfsHist] = useState();
  const [plsHist, setPlsHist] = useState();

  let st = useSelector((state) => state);
  useEffect(() => {
    console.debug("State: \n" + JSON.stringify(st, undefined, 2));
    if (st === "") { }
    if (st && st.partnerSystems.wd) {
      setWdLogo(workdayLogoCheck);
      setWdLink("/HCM1Form/wd");
      setWdAuth("/PartnerLogin/wd");
      setWdHist("/History/wd/0");
    }
    else {
      setWdLogo(workdayLogo);
      setWdLink("/PartnerLogin/wd");
      setWdAuth(null);
    }

    if (st && st.partnerSystems.sf) {
      setSfLogo(successFactorsLogoCheck);
      setSfLink("/HCM1Form/sf");
      setSfAuth("/PartnerLogin/sf")
      setSfHist("/History/sf/0");
    }
    else {
      setSfLogo(successFactorsLogo);
      setSfLink("/PartnerLogin/sf");
      setSfAuth(null);
    }

    if (st && st.partnerSystems.afs) {
      setAfsLogo(azureLogoCheck);
      setAfsLink("/HCM1Form/afs");
      setAfsAuth("/PartnerLogin/afs");
      setAfsHist("/History/afs/0");
    }
    else {
      setAfsLogo(azureLogo);
      setAfsLink("/PartnerLogin/afs");
      setAfsAuth(null)
    }

    if (st && st.partnerSystems.sftp) {
      setSftpLogo(sftpLogoCheck);
      setSftpLink("/HCM1Form/sftp");
      setSftpAuth("/PartnerLogin/sftp");
      setSftpHist("/History/sftp/0");
    }
    else {
      setSftpLogo(sftpLogoPng);
      setSftpLink("/PartnerLogin/sftp");
      setSftpAuth(null);
    }

    if (st && st.partnerSystems.pls) {
      setPlsLogo(pluralsightLogoCheck);
      setPlsLink("/HCM1Form/pls");
      setPlsAuth("/PartnerLogin/pls");
      setPlsHist("/History/pls/0");
    }
    else {
      setPlsLogo(pluralsightLogo);
      setPlsLink("/PartnerLogin/pls");
      setPlsAuth(null);
    }
  }, [st]);

  return (
    <div>
      <AppNavbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <Grid item
            justifyContent="center"
            alignItems="center" xs={12}>
            <Grid item sx={{ textAlign: 'center', marginTop: '32px' }} >
              <Typography color="primary" variant="h3" component="div" >
                <b>Welcome to <img width={"100"} src={shellLogo} alt="Workday" /> Integration Hub</b>
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
            <Grid item sx={{ textAlign: 'center', margin: '50px' }}  >
              <Button sx={{ color: '#FFFFFF', borderRadius: 20, width: '255px', }} color="secondary" variant="contained">Connect</Button>
            </Grid>
            <Grid item sx={{ textAlign: 'center', margin: '50px' }}>
              <Divider textAlign="center">with</Divider>
            </Grid>
            <Grid item>
              <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}>
                <Grid item >
                  <Button LinkComponent={Link} to={wdLink}><img width={"100"} src={wdLogo} alt="Workday" />
                  </Button>
                    { wdAuth !== null ? (
                      <Stack fullWidth alignItems="center" justifyContent="center" direction="row" spacing={1}>
                        <IconButton variant="outlined" color="secondary" LinkComponent={Link} to={wdAuth}><VpnKeyIcon fontSize="small" color="action"/></IconButton>
                        <IconButton variant="contained" color="secondary" LinkComponent={Link} to={wdLink}><SettingsIcon fontSize="small" color="primary"/></IconButton>
                        <IconButton variant="outlined" color="success" LinkComponent={Link} to={wdHist}><EventNoteIcon fontSize="small" color="info"/></IconButton>
                      </Stack>
                    ) : null}
                </Grid>
                <Grid item >
                  <Button LinkComponent={Link} to={afsLink}><img width={"100"} src={afsLogo} alt="Azure File Storage" />
                  </Button>
                    { afsAuth !== null ? (
                      <Stack fullWidth alignItems="center" justifyContent="center" direction="row" spacing={1}>
                        <IconButton variant="outlined" color="secondary" LinkComponent={Link} to={afsAuth}><VpnKeyIcon fontSize="small" color="action"/></IconButton>
                        <IconButton variant="contained" color="secondary" LinkComponent={Link} to={afsLink}><SettingsIcon fontSize="small" color="primary"/></IconButton>
                        <IconButton variant="outlined" color="success" LinkComponent={Link} to={afsHist}><EventNoteIcon fontSize="small" color="info"/></IconButton>
                      </Stack>
                    ) : null}
                </Grid>
                <Grid item >
                  <Button LinkComponent={Link} to={sfLink}><img width={"100"} src={sfLogo} alt="SuccessFactors" />
                  </Button>
                    { sfAuth !== null ? (
                      <Stack fullWidth alignItems="center" justifyContent="center" direction="row" spacing={1}>
                        <IconButton variant="outlined" color="secondary" LinkComponent={Link} to={sfAuth}><VpnKeyIcon fontSize="small" color="action"/></IconButton>
                        <IconButton variant="contained" color="secondary" LinkComponent={Link} to={sfLink}><SettingsIcon fontSize="small" color="primary"/></IconButton>
                        <IconButton variant="outlined" color="success" LinkComponent={Link} to={sfHist}><EventNoteIcon fontSize="small" color="info"/></IconButton>
                      </Stack>
                    ) : null}
                </Grid>
                <Grid item >
                  <Button LinkComponent={Link} to={sftpLink}><img width={"100"} src={sftpLogo} alt="SFTP" />
                  </Button>
                    { sftpAuth !== null ? (
                      <Stack fullWidth alignItems="center" justifyContent="center" direction="row" spacing={1}>
                        <IconButton variant="outlined" color="secondary" LinkComponent={Link} to={sftpAuth}><VpnKeyIcon fontSize="small" color="action"/></IconButton>
                        <IconButton variant="contained" color="secondary" LinkComponent={Link} to={sftpLink}><SettingsIcon fontSize="small" color="primary"/></IconButton>
                        <IconButton variant="outlined" color="success" LinkComponent={Link} to={sftpHist}><EventNoteIcon fontSize="small" color="info"/></IconButton>
                      </Stack>
                    ) : null}
                </Grid>
                <Grid item >
                  <Button LinkComponent={Link} to={plsLink}><img width={"100"} src={plsLogo} alt="PluralSight" />
                  </Button>
                    { plsAuth !== null ? (
                      <Stack fullWidth alignItems="center" justifyContent="center" direction="row" spacing={1}>
                        <IconButton variant="outlined" color="secondary" LinkComponent={Link} to={plsAuth}><VpnKeyIcon fontSize="small" color="action"/></IconButton>
                        <IconButton variant="contained" color="secondary" LinkComponent={Link} to={plsLink}><SettingsIcon fontSize="small" color="primary"/></IconButton>
                        <IconButton variant="outlined" color="success" LinkComponent={Link} to={plsHist}><EventNoteIcon fontSize="small" color="info"/></IconButton>
                      </Stack>
                    ) : null}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <img src={ihLogo} className="App-logo-lg" alt="logo" />
          </Grid>
        </Grid>
      </Box>
      <AppBottomNavbar />
    </div>
  );
}

export default Welcome;