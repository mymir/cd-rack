import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

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
    const location = useLocation().pathname;

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navColor = () => {
        if (location === '/home') {
            return 'transparent'
        } else {
            return 'primary'
        }
    }

    return (
        <AppBar 
            position="fixed" 
            component="nav" 
            color={navColor()}
            sx={{ 
                boxShadow: 'none', 
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0))',
                px: 10,
                py: 0.5
            }}
        >
            <CssBaseline />
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        <IconButton 
                            aria-label="site-logo" 
                            size="large"
                            color="inherit"
                            sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} component={RouterLink} to='/home'
                        >
                            <AdbIcon/>
                        </IconButton>
                        <Typography 
                            variant="h6" 
                            noWrap
                            component="a"       
                            sx={{
                                mr: 2,
                                display: { xs: 'none', sm: 'flex' },
                                alignSelf: 'center'
                            }}
                        >
                            LOGO
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
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
                                display: { xs: 'block', sm: 'none' },
                            }}
                        >
                        {navItems.map((item) => (
                            <MenuItem key={item.id} component={RouterLink} to={item.route} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{item.label}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <IconButton 
                        aria-label="site-logo"
                        color="inherit"
                        sx={{ display: { xs: 'block', sm: 'none' }, mr: 1 }} 
                        component={RouterLink} to='/home'
                        size="large"
                    >
                        <AdbIcon/>
                    </IconButton>
                    <Typography 
                        variant="h6" 
                        noWrap
                        component="a"       
                        sx={{
                            mr: 2,
                            display: { xs: 'block', sm: 'none' },
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
                                        component={RouterLink}
                                        to={item.route}
                                        sx={{ color: 'text.primary', fontWeight: 'bold' }}
                                    >
                                        {item.label}
                                    </Button>
                                )
                            } else {
                                return (
                                    <Button
                                        key={item.id}
                                        component={RouterLink}
                                        to={item.route}
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