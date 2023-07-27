import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';


import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContainer from '../components/CardContainer';
import LoginForm from './LoginForm';

const Login = () => {
    return (
    <Container
        sx={{
            marginTop: 8,
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
    >
        <Typography component="h1" variant="h5">
            Login
        </Typography>
        <CardContainer children={<LoginForm />} />
          <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="/home" variant="body2" color="text.secondary">
                  Forgot your password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2" color="text.secondary">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
        </Container>
    );
    
  };

export default Login;