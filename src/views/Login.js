import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';


import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardContainer from '../components/CardContainer';
import LoginForm from '../authorization/LoginForm';

const Login = () => {
    return (
    <Container
        sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my: 6,
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
        <Typography variant="h5">
            Login
        </Typography>
        <CardContainer children={<LoginForm />} />
          <Link component={RouterLink} to="/signup" variant="body2" color="text.secondary">
            {"Don't have an account? Sign Up"}
          </Link>
        </Container>
    );
    
  };

export default Login;