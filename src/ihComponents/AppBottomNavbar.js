import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function AppBottomNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{ whiteSpace: 'nowrap' }} label="©2022 SkyHive,Inc. All rights reserved."  />
        <BottomNavigationAction label="Privacy Policy"  />
        <BottomNavigationAction label="User Terms of Use"  />
        <BottomNavigationAction label="Customer Terms of Use"  />
        <BottomNavigationAction label="Cookies Policy"  />
        <BottomNavigationAction label="About Us"  />
      </BottomNavigation>
    </Box>
  );
}