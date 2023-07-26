import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import { navItems } from './NavItems';
import SearchBar from '../components/SearchBar';

import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation().pathname;

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleRouteAndCloseNavMenu = (route) => {
        setAnchorElNav(null);
        navigate(route);
    };

    const navColor = () => {
        if (location === '/home') {
            return 'secondary'
        } else {
            return 'primary'
        }
    }

    return (
        <AppBar position="fixed" component="nav" className="header-bar" color={navColor()} sx={{ boxShadow: 'none'}}>
            <CssBaseline />
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        <AdbIcon className="site-logo" sx={{ display: { xs: 'none', md: 'block' }, mr: 1 }} onClick={() => navigate('/home')}/>
                        <Typography 
                            variant="h6" 
                            noWrap
                            component="a"       
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'block' },
                            }}
                        >
                            LOGO
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                        {navItems.map((item) => (
                            <MenuItem key={item.id} onClick={() => handleRouteAndCloseNavMenu(item.route)}>
                            <Typography textAlign="center">{item.label}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <AdbIcon className="site-logo" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} onClick={() => navigate('/home')}/>
                    <Typography 
                        variant="h6" 
                        noWrap
                        component="a"       
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                        }}>
                        LOGO
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => 
                        {
                            if (('/' + item.route) === location) {
                                return (
                                    <Button
                                        key={item.id}
                                        onClick={() => handleRouteAndCloseNavMenu(item.route)}
                                        sx={{ color: 'text.primary', fontWeight: 'bold' }}
                                    >
                                        {item.label}
                                    </Button>
                                )
                            } else {
                                return (
                                    <Button
                                        key={item.id}
                                        onClick={() => handleRouteAndCloseNavMenu(item.route)}
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {item.label}
                                    </Button>
                                )
                            }
                        })}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <SearchBar></SearchBar>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
    
  };

export default Header;