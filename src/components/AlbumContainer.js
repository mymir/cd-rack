import { Fragment, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link as RouterLink } from 'react-router-dom';

const AlbumContainer = ({ children, backgroundImageUrl, link }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  const handleRating = (_event, newValue) => {
    ref.current.style.opacity = 1;
    setValue(newValue);
  }

  return (
    <Fragment>
        <Box 
            sx={{                
                width: '180px',
                height: '180px'
            }}
        >
            <Card
                component={RouterLink}
                to={link}
                sx={{ 
                display: 'flex',
                maxWidth: '400px',
                bgcolor: 'background.paper',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                width: 'inherit',
                height: 'inherit',
                ':hover': {
                    boxShadow: 5,
                }
                }} 
            />
            <Box 
                ref={ref}
                sx={{ 
                    width: '100%', 
                    height: '100%', 
                    position: 'absolute',
                    width: 'inherit',
                    height: 'inherit',
                    opacity: 0,             
                    alignContent: 'center',
                    justifyContent: 'center',
                    display: 'grid',
                    bgcolor: 'rgba(26,26,26,0.5)',
                    borderRadius: 1,
                    ':hover': { opacity: 1, transition: '0.3s' }
                }}
            >
                <Rating
                    name="album-rating"
                    value={value}
                    precision={0.5}
                    size="large"
                    onChange={handleRating}
                />
            </Box>
        </Box>
        <Typography variant='h6' sx={{ display: 'flex', position: 'static' }}>
            {children}
        </Typography>
  </Fragment>
  )
};

export default AlbumContainer;


