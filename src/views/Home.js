import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

const Home = () => {
    return (
      <Box
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography variant="h5">
            HOME
        </Typography> 
      </Box>
    );
};

export default Home;