import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AlbumContainer from '../components/AlbumContainer';
// import ImageIcon from '@mui/icons-material/Image';
import { genreItems } from '../nav/GenreItems';
import SearchBar from '../components/SearchBar';

const TrendingAlbums = () => {    
    return (
    <Box
        sx={{ 
            position: 'static',
            width: '100vw', 
            color: 'black',
            bgcolor: '#e7eaec',
            pb: 14,
            pt: 10
        }}
    >
        <Grid container
            spacing={4}
            sx={{ 
                justifyContent: "center",
                position: 'static',
                pb: 8,
                px: 10
            }}
        >
            <Grid item xs={12} md={12} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 10 }}>
                    What are you listening to?
                </Typography>
            </Grid>
            {genreItems.map((item) => (
                <Grid item sm={4} md={3} lg={2.1} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <AlbumContainer backgroundImageUrl={item.image} link={'/genres/' + item.main} key={item.main}>
                        <Typography variant='h6' sx={{position: 'absolute', fontWeight: 'bold', pointerEvents: 'none', textShadow: '2px 1px 3px #000000cf'}}>
                            {item.main.toUpperCase()}
                        </Typography>
                    </AlbumContainer>
                </Grid>
            ))}
            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Typography variant='h4' sx={{ fontWeight: 'bold', mt: 8, mb: 5 }}>
                    Didn't find what you're looking for?
                </Typography>
                <SearchBar />
            </Grid>
        </Grid>
    </Box>   
    );
};

export default TrendingAlbums;