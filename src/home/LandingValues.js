import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import CreateIcon from '@mui/icons-material/Create';

const LandingValues = () => {    
    return (
    <Box
        sx={{ 
            width: '100vw', 
            color: 'black',
        }}
    >
        <Grid container
            spacing={0}
            sx={{ 
                justifyContent: "center",
                px: 15,
                py: 14
            }}
        >
            <Grid item xs={12} md={12} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 8 }}>
                    Why join?
                </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Paper 
                    elevation={0}
                    sx={{ 
                        textAlign: 'center',
                        height: '300px',
                        bgcolor: 'transparent',
                        color: 'black',
                        px: 2,
                        py: 4,
                        ':hover': {
                            color: 'black',
                            bgcolor: 'primary.main',
                            transition: "0.3s",
                        }
                    }}>
                    <CreateIcon sx={{ fontSize: 'xxx-large' }} />
                    <Typography variant='h6' sx={{ fontWeight: 'bold', my: 2 }}>
                        WRITE REVIEWS
                    </Typography>
                    <Typography variant='h6' sx={{ maxWidth: '300px', mt: 2 }}>
                        Review albums and see what others are saying about new releases
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Paper 
                    elevation={0}
                    sx={{
                        textAlign: 'center',
                        height: '300px',
                        bgcolor: 'transparent',
                        color: 'black',
                        px: 2,
                        py: 4,
                        ':hover': {
                            color: 'black',
                            bgcolor: 'primary.main',
                            transition: "0.3s",
                        }
                }}>
                    <StarIcon sx={{ fontSize: 'xxx-large' }} />
                    <Typography variant='h6' sx={{ fontWeight: 'bold', my: 2 }}>
                        RANK ALBUMS
                    </Typography>
                    <Typography variant='h6' sx={{ maxWidth: '300px', mt: 2 }}>
                        Rank albums and create a tier lists showing off your favorite tracks
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Paper 
                    elevation={0}
                    sx={{
                        textAlign: 'center',
                        height: '300px',
                        bgcolor: 'transparent',
                        color: 'black',
                        px: 2,
                        py: 4,
                        ':hover': {
                            color: 'black',
                            bgcolor: 'primary.main',
                            transition: "0.3s",
                        }
                }}>
                    <LibraryAddIcon sx={{ fontSize: 'xxx-large' }} />
                    <Typography variant='h6' sx={{ fontWeight: 'bold', my: 2 }}>
                        CREATE COLLECTIONS
                    </Typography>
                    <Typography variant='h6' sx={{ maxWidth: '300px', mt: 2 }}>
                        Create lists, save your favorties, and show off your taste in music
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Box>   
    );
};

export default LandingValues;