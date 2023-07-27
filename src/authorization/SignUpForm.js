import { useNavigate } from 'react-router-dom';

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SignUpForm = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                variant="filled"
                sx={{ bgcolor: '#292929' }}
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                variant="filled"
                sx={{ bgcolor: '#292929' }}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="filled"
                sx={{ bgcolor: '#292929' }}
            />
            
            <Grid  
                justifyContent="left"
                alignItems="center" 
                container
            >
              <Grid item xs={1}>
                <FormControlLabel
                    control={<Checkbox value="remember" color="default" />}
                    color="text.secondary"
                    // label="I accept the Terms Of Use"
                />
              </Grid>
              <Grid sx={{ textAlign: 'left' }} item xs={10}>
                <Typography variant='body1' sx={{ color: 'text.secondary' }}>I accept the <Link href="" underline="hover" sx={{ color: 'text.primary' }}>Terms Of Use</Link></Typography>
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: '#abc2ae', bgcolor: '#292929' }}
            >
                Sign Up
            </Button>
        </Box>
    );    
};

export default SignUpForm;            