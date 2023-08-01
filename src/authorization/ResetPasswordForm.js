import {  useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ResetPasswordForm = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/login');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="body1" color="primary">
                Enter your email address and we'll send you a link to reset your password:
            </Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                type="email"
                variant="filled"
                size="small"
                sx={{ bgcolor: '#292929' }}
                autoFocus
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Send
            </Button>
        </Box>
    );    
};

export default ResetPasswordForm;            