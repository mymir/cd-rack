import { Fragment } from 'react';
import IconButton from '@mui/material/IconButton';

import { socialItems } from '../nav/SocialItems';

const SocialLinks = ({ margin=0 }) => {
    return (
        <Fragment>
            {socialItems.map((item) => (
                <IconButton 
                    aria-label={item.label}
                    color="inherit"
                    component='a'
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    sx={{ ml: margin }}              
                >
                    {item.icon}
                </IconButton>
            ))}
        </Fragment>
    );
};

export default SocialLinks;