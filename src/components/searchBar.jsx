import React from 'react';
import { Box, Typography, IconButton, InputBase, Menu, MenuItem, Button } from '@mui/material';

const Header = () => {
 return (
<Box sx={{position: 'fixed', top: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
      <Typography variant="h6">Dashboards / Default</Typography>
      <div>
       
      </div>
    </Box>
  );  
};

export default Header;