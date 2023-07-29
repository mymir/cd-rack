import {  Link as RouterLink, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const LoginForm = () => {
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
                label="Email or Username"
                name="email"
                autoComplete="email"
                type="email"
                variant="filled"
                size="small"
                sx={{ bgcolor: '#292929' }}
                autoFocus
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
                size="small"
                sx={{ bgcolor: '#292929' }}
            />
            <Link component={RouterLink} to="/home" variant="body2" color="text.secondary" sx={{display: 'flex'}}>
                  Forgot your password?
            </Link>
            <FormControlLabel
                control={<Checkbox value="remember" color="default" />}
                color="text.secondary"
                label="Remember me"
                sx={{ mt: 2, color: 'text.secondary' }}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Login
            </Button>
        </Box>
    );    
};

export default LoginForm;            