import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Toolbar from '@mui/material/Toolbar';

import { styled } from '@mui/material/styles';
import LandingBackground from './LandingBackground';

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
    <Box sx={{ textAlign: 'center', alignContent: 'center', width: '100%' }}>
      <LandingBackground />
      {/* <Toolbar /> */}
      <Box
        justifyContent="center"
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'static', 
          right: 0,
          left: 0, 
          height: '80vh', 
          px: '25vw'
        }}
      >
        {/* <Typography variant='h2' sx={{ fontWeight: 'bold', textShadow: '0px 0px 20px rgba(0,0,0,.7)', lineHeight: { xs: '0.9', sm: '1.2' } }}> */}
        <Typography variant='h2' sx={{ fontWeight: 'bold', textShadow: '0px 0px 20px rgba(0,0,0,.7)', display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          {/* Here is why you should use this site */}
          Create your own personal music diary
          {/* Write Reviews, Rank Albums, Show off your Collection --> grid items*/}
        </Typography>
        <Typography variant='h4' sx={{ fontWeight: 'bold', textShadow: '0px 0px 20px rgba(0,0,0,.7)', lineHeight: '1.1', display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
          {/* Here is why you should use this site */}
          Create your own personal music diary
          {/* Write Reviews, Rank Albums, Show off your Collection --> grid items*/}
        </Typography>
        <Toolbar />
        <Button 
          variant="contained" 
          size="large" 
          color="primary"
          component={RouterLink}
          to="/signup"
          sx={{ m: 0 }}
        >
          Get Started
        </Button>
        <Toolbar />
        <IconButton 
          aria-label="site-logo" 
          size="large"
          color="inherit"
          onClick={scrollToTarget}
          sx={{ p: 0, transform: 'scale(1.5)' }}
        >
          <StyledArrow fontSize="inherit" />
        </IconButton>        
      </Box>
    </Box>
    
    );
};

export default Landing;