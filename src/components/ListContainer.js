import { Fragment } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Link as RouterLink } from 'react-router-dom';

const ListContainer = ({ children, backgroundImageUrl, link }) => {

  return (
    <Fragment>
    <Card
        component={RouterLink}
        to={link}
        sx={{ 
        display: 'flex',
        maxWidth: '400px',
        bgcolor: 'background.paper',
        width: '180px',
        height: '180px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: 'grayscale(100%)',
        ':hover': {
            boxShadow: 5,
            filter: 'grayscale(0%)',
        }
        }} 
    >        
        <Box
            sx={{ 
                position: 'absolute',
                width: 'inherit',
                height: 'inherit',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000',
                opacity: 0.3,
                ':hover': {
                    opacity: 0,
                    transition: '0.3s'
                }
            }} 
        > 
        </Box>
        <Typography variant='h6' sx={{position: 'absolute', fontWeight: 'bold', pointerEvents: 'none', textShadow: '2px 1px 3px #000000cf'}}>
            {children}
        </Typography>
        
    </Card>
  </Fragment>
  )
};

export default ListContainer;


