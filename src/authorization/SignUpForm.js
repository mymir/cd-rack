import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TermDialog from './TermDialog';

const SignUpForm = () => {
    const [agreed, setAgreed] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();

    const handlePopoverOpen = (event) => {
        if (!agreed) {
            setAnchorEl(event.currentTarget);
        }        
      };
    
      const handlePopoverClose = () => {
        setAnchorEl(null);
      };

    const handleAgree = (isAgreed) => {
        setAgreed(isAgreed);
      };

    const handleSubmit = () => {
        navigate('/home');
    };

    const open = Boolean(anchorEl);

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
                type="email"
                variant="filled"
                size="small"
                sx={{ bgcolor: '#292929', borderRadius: '2%' }}
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
                size="small"
                sx={{ bgcolor: '#292929', borderRadius: '2%' }}
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
                sx={{ bgcolor: '#292929', borderRadius: '2%' }}
            />
            
            <Grid  
                justifyContent="left"
                alignItems="center" 
                container
            >
              <Grid item xs={1}>
                <FormControlLabel
                    control={<Checkbox value="agree" />}
                    color="text.secondary"
                    disabled={!agreed}
                    checked={agreed}
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                />
                <Popover
                    id="mouse-over-popover"
                    sx={{
                    pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography sx={{ p: 1 }}>Please read terms before agreeing.</Typography>
                </Popover>
              </Grid>
              <Grid sx={{ textAlign: 'left' }} item xs={10}>
                <TermDialog handleAgree={handleAgree}></TermDialog>
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
        </Box>
    );    
};

export default SignUpForm;            