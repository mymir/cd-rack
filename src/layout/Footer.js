import { Link as RouterLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { company, legal } from '../nav/FooterItems';

const Footer = () => {

    return (
        <Grid 
            container
            position='static'
            sx={{
                bgcolor: 'background.paper', 
                px: 10,
                pt: 5,
                pb: 10
            }}
        >
            <Grid item xs={2} md={4} container>
                <Grid item xs={12} md={12}>
                    <IconButton 
                        aria-label="linkedin" 
                        color="inherit"
                        component='a'
                        target="_blank"
                        href='https://www.linkedin.com/in/rafael-mymir-zingle/'
                        sx={{ pr: 1 }}
                    >
                        <LinkedInIcon sx={{ fontSize: 'xx-large' }} />
                    </IconButton>
                    <IconButton 
                        aria-label="github" 
                        color="inherit"
                        component='a' 
                        href='https://github.com/mymir/cd-rack/tree/main'
                        target="_blank"
                        sx={{ pr: 1 }}
                    >
                        <GitHubIcon sx={{ fontSize: 'xx-large' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant='caption'>© 2023 CD-Rack</Typography>
                </Grid>
            </Grid>
            <Grid item xs={2} sm={2} md={4} />
            <Grid item xs={4} md={2} container spacing={1}>
                {company.map((item) => 
                    {
                        if(item.link) {
                            return (
                                <Grid item xs={12} md={12} key={item.id}>
                                    <Button                                        
                                        component={RouterLink}
                                        to={item.route}
                                        sx={{ color: 'text.primary' }}
                                    >
                                        {item.label}
                                    </Button>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid item xs={12} md={12} key={item.id}>
                                    <Typography                                        
                                        sx={{ color: 'text.secondary', fontWeight: 'bold', pl: 1 }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
            <Grid item xs={4} md={2} container spacing={1}>
                {legal.map((item) => 
                    {
                        if(item.link) {
                            return (
                                <Grid item xs={12} md={12} key={item.id}>
                                    <Button                                        
                                        component={RouterLink}
                                        to={item.route}
                                        sx={{ color: 'text.primary' }}
                                    >
                                        {item.label}
                                    </Button>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid item xs={12} md={12} key={item.id}>
                                    <Typography                                        
                                        sx={{ color: 'text.secondary', fontWeight: 'bold', pl: 1 }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </Grid>
    );
    
  };

export default Footer;