import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Toolbar from '@mui/material/Toolbar';

import { styled } from '@mui/material/styles';
import LandingBackground from './HeroBackground';

const StyledArrow = styled(ArrowDownwardIcon)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: translateY(3px);
  }
  `}
`;

const Landing = ( {scrollToTarget} ) => {
    
    return (
    <Box sx={{ textAlign: 'center', alignContent: 'center', width: '100%', height: '85vh' }}>
      <LandingBackground />
      <Box
        justifyContent="center"
        sx={{ 
          display: 'flex',
          zIndex: 0,
          flexDirection: 'column',
          alignItems: 'center',
          position: 'fixed', 
          right: 0,
          left: 0, 
          height: '95vh', 
          px: '25vw'
        }}
      >
        <Typography variant='h2' sx={{ zIndex: 2, fontWeight: 'bold', textShadow: '0px 0px 20px rgba(0,0,0,.7)', lineHeight: { xs: '1', sm: '1.1', md: '1.3' } }}>
          Create your own music journal
        </Typography>
        {/* <Toolbar /> */}
        <Button 
          variant="contained" 
          size="large" 
          color="primary"
          component={RouterLink}
          to="/signup"
          sx={{ mt: 6, mb: 10, fontWeight: 'bold' }}
        >
          Get Started
        </Button>
        {/* <Toolbar /> */}
        {/* <IconButton 
          aria-label="site-logo" 
          size="large"
          color="inherit"
          onClick={scrollToTarget}
          sx={{ p: 0, transform: 'scale(1.5)' }}
        >
          <StyledArrow fontSize="inherit" />
        </IconButton>         */}
      </Box>
    </Box>
    
    );
};

export default Landing;