import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

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
                variant="filled"
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
                sx={{ bgcolor: '#292929' }}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="default" />}
                color="text.secondary"
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: '#abc2ae', bgcolor: '#292929' }}
                >
                Login
            </Button>
        </Box>
    );    
};

export default LoginForm;            