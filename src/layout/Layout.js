import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from "react-router-dom";
import Header from './Header';
import { Toolbar } from '@mui/material';
import theme from './Theme';
// import Footer from './Footer';

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }} >
                {/* <CssBaseline /> */}
                <Header />
                <Toolbar />
                <Box component="main" sx={{ display: 'block' }}>
                    <Outlet />
                </Box>
                {/* <Footer /> */}
            </Box>
        </ThemeProvider>
);
    
};

export default Layout;