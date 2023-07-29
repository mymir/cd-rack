import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import { navItems } from '../nav/HeaderItems';
import SearchBar from '../components/SearchBar';
import HeaderMenu from './HeaderMenu';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import SiteLogo from '../components/SiteLogo';

const Header = () => {
    const location = useLocation().pathname;

    const navColor = () => {
        if (location === '/home') {
            return 'transparent'
        } else {
            return 'primary'
        }
    }

    const navPosition = () => {
        if (location === '/home') {
            return 'absolute'
        } else {
            return 'static'
        }
    }

    return (
        <AppBar 
            position={navPosition()}
            component='nav'
            color={navColor()}
            sx={{ 
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
                boxShadow: 'none',
                px: 10,
                py: 0.5
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HeaderMenu />
                    <Box sx={{ flexGrow: 1, display: { sm: 'flex', md: 'none' } }}>
                        <SiteLogo />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' }}}>
                        <SiteLogo />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
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
                        <SearchBar />
                    </Box>
                    <IconButton 
                        aria-label="linkedin" 
                        color="inherit"
                        component='a'
                        target="_blank"
                        href='https://www.linkedin.com/in/rafael-mymir-zingle/'
                        sx={{ ml: 1, pr: 1 }}
                    >
                        <LinkedInIcon sx={{ fontSize: 'xx-large' }} />
                    </IconButton>
                    <IconButton 
                        aria-label="github" 
                        color="inherit"
                        component='a' 
                        href='https://github.com/mymir/cd-rack/tree/main'
                        target="_blank"
                        sx={{ pr: 1 }}
                    >
                        <GitHubIcon sx={{ fontSize: 'xx-large' }} />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
    
  };

export default Header;