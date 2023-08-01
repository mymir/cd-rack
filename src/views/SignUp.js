import { Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CardContainer from '../components/CardContainer';
import Container from '@mui/material/Container';
import SignUpForm from '../authorization/SignUpForm';
import SiteLogo from '../components/SiteLogo';
import Box from '@mui/material/Box';

const SignUp = () => {
    return (
    <Container
        sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my: 6
          }}
    >
      <Box
        component="div"
        sx={{
            position: 'fixed',
            display: 'flex',
            top: 0,
            right: 0,
            left: 0,
            width: '100vw', 
            height: '100vh',
            background: 'linear-gradient(160deg, rgba(118,125,214,.3), rgba(252,186,3,0) 75%), linear-gradient(336deg, rgba(0,0,0,0.8), rgba(0,0,0,0))',
            opacity: 0.2,
            zIndex: -1,            
        }}
      />
      <Typography 
        variant="h5" 
        alignContent="center"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
          Join <SiteLogo />
      </Typography>
      <CardContainer children={<SignUpForm />} />
      <Link component={RouterLink} to="/login" variant="body2" color="text.secondary">
            Already have an account? Login
      </Link>
    </Container>
    );
    
  };

export default SignUp;