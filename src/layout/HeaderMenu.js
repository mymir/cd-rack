import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { navItems } from '../nav/HeaderItems';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { sm: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="nav aria"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { sm: 'block', md: 'none' },
                }}
            >
            {navItems.map((item) => (
                <MenuItem key={item.id} component={RouterLink} to={item.route} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
    );  
  };

export default Header;