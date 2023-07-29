import { Link as RouterLink } from 'react-router-dom';
import { Fragment } from 'react';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AlbumIcon from '@mui/icons-material/Album';

const SiteLogo = () => {

    return (
        <Fragment>
            <IconButton 
                aria-label="site-logo" 
                color="inherit"
                component={RouterLink} to='/home'
                sx={{ pr: 1 }}
            >
                <AlbumIcon sx={{ alignSelf: 'center', fontSize: 'xx-large' }} />
            </IconButton>
            <Typography 
                variant="h6" 
                noWrap
                component="a"       
                sx={{ alignSelf: 'center', display: { xs: 'none', sm: 'flex' } }}
            >
                CD///RACK
            </Typography>
        </Fragment>
    );
    
  };

export default SiteLogo;