import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

const Login = () => {
    return (
    <Box
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Toolbar />
      <Typography variant="h5">
          LOGIN
      </Typography> 
    </Box>
    );
    
  };

export default Login;