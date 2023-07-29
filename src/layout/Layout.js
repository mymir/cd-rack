import { Fragment } from 'react'
import { Outlet } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <CssBaseline />
                <Header />
                <Outlet />
                <Footer />
            </Fragment>
        </ThemeProvider>
);
    
};

export default Layout;