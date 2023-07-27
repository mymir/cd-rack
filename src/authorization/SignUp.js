import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContainer from '../components/CardContainer';
import Container from '@mui/material/Container';
import SignUpForm from './SignUpForm';
import AdbIcon from '@mui/icons-material/Adb';

const SignUp = () => {
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
          Join <AdbIcon sx={{ml: 1, mr: 0}} /> LOGO
      </Typography>
      <CardContainer children={<SignUpForm />} />
      <Grid container>
        <Grid item>
          <Link component={RouterLink} to="/login" variant="body2" color="text.secondary">
            {"Already have an account? Login"}
          </Link>
        </Grid>
      </Grid>
    </Container>
    );
    
  };

export default SignUp;