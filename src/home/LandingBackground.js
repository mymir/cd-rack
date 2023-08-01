import Box from '@mui/material/Box';

const LandingBackground = () => {
    const backgroundImageUrl = "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80"
    
    return (
    <Box 
        sx={{ 
            position: 'absolute',
            display: 'flex', 
            top: 0, 
            right: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh',
            m: 0
        }}
    >
      <Box
        component="div"
        sx={{
            position: 'absolute', 
            display: 'flex',
            width: '100vw', 
            height: '100vh',
            boxShadow: '0px 0px 100px 60px rgb(0 0 0 / 20%) inset',
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundColor: '#6b4c38',
            opacity: 0.5,
            zIndex: -2,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
      />
      <Box
        component="div"
        sx={{
            display: 'flex',
            width: '100vw', 
            height: '100vh',
            background: 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(252,186,3,.8), rgba(252,186,3,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%), linear-gradient(336deg, rgba(0,0,0,1), rgba(0,0,0,1))',
            opacity: 0.2,
            zIndex: -1,            
        }}
      />
    </Box>   
    );
};

export default LandingBackground;