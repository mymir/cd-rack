import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => {
    const backgroundImageUrl = "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80"
    
    return (
    <Box sx={{ textAlign: 'center', alignContent: 'center', width: '100%' }}>
      <Box
        component="div"
        sx={{
          position: 'fixed',
          display: 'flex',
          left: 0,
          right: 0,
          top: 0,
          width: '100vw',
          // height: '70vh',
          height: '100vh',
          backgroundImage: `url(${backgroundImageUrl})`,
          opacity: '0.5',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          m: 0
        }}
      />
      <Box sx={{ position: 'fixed', right: 0, left: 0, top: '30vh', px: '25vw'}}>
        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
          Here is why you should use this site
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          color="primary"
          component={RouterLink}
          to="/signup"
          sx={{ mt: 4 }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
    
    );
};

export default Home;