import { Link as RouterLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SocialLinks from '../components/SocialLinks';
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
                    <SocialLinks />
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