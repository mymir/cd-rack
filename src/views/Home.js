import { useRef } from 'react';

import Footer from '../layout/Footer';
import Landing from './Landing';
import Box from '@mui/material/Box';

const Home = () => {
    const ref = useRef(null);

    const scrollToTarget = () => {
      console.log(ref);
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
    <Box sx={{ width: '100%' }}>
      <Landing scrollToTarget={scrollToTarget}></Landing>
      <div ref={ref}>
        {/* <Footer /> */}
      </div>
    </Box>
    
    );
};

export default Home;