import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AlbumContainer from '../components/AlbumContainer';

const items = [1,2,3,4,5];
const url = 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'

const TrendingAlbums = () => {    
    return (
    <Box
        sx={{ 
            position: 'static',
            width: '100vw', 
            color: 'black',
            py: 10
        }}
    >
        <Grid container
            spacing={4}
            sx={{ 
                justifyContent: "center",
                position: 'static'
            }}
        >
            {items.map((item) => (
                <Grid item sm={4} md={3} lg={2} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <AlbumContainer backgroundImageUrl={url} key={item}>
                        Album
                    </AlbumContainer>
                </Grid>
            ))}
        </Grid>
    </Box>   
    );
};

export default TrendingAlbums;