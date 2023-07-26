import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

const SignUp = () => {
    return (
    <Box
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Toolbar />
      <Typography variant="h5">
          SIGNUP
      </Typography> 
    </Box>
    );
    
  };

export default SignUp;