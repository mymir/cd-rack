import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import { navItems } from '../nav/HeaderItems';
import SearchBar from '../components/SearchBar';
import HeaderMenu from './HeaderMenu';
import SiteLogo from '../components/SiteLogo';
import SocialLinks from '../components/SocialLinks';
import ScrollHeader from './ScrollHeader';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

const BasicHeader = () => {
    const location = useLocation().pathname;

    return (
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
                    <SocialLinks margin={1} />
                </Toolbar>
            </Container>
    );
    
  };

const Header = () => {
    const location = useLocation().pathname;
    
    return (
        <Fragment>
            {(location === '/home')
            ?   <ScrollHeader>
                    <AppBar 
                        position='fixed'
                        component='nav'
                        color='transparent'
                        sx={{ 
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0))',
                            boxShadow: 'none',
                            px: 10,
                            py: 0.5,
                            ':hover': {
                                backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0))',
                            }
                        }}
                    >
                        <BasicHeader />
                    </AppBar>
                </ScrollHeader>
            :   <AppBar 
                    position='static'
                    component='nav'
                    color='primary'
                    sx={{ 
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
                        boxShadow: 'none',
                        px: 10,
                        py: 0.5
                    }}
                >
                    <BasicHeader />
                </AppBar>}
        </Fragment>
    );
    
  };

export default Header;