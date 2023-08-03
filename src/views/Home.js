import { useRef } from 'react';

import LandingHero from '../home/LandingHero';
import LandingValues from '../home/LandingValues';
import LandingGenres from '../home/LandingGenres';
import LandingTrending from '../home/LandingTrending';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Home = () => {
    const ref = useRef(null);

    const scrollToTarget = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const StyledArrow = styled(ArrowUpwardIcon)`
      ${({ theme }) => `
      cursor: pointer;
      transition: ${theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard,
      })};
      &:hover {
        transform: translateY(-3px);
      }
      `}
    `;

    return (
    <Box sx={{ width: '100vw' }}>
      <LandingHero scrollToTarget={scrollToTarget}></LandingHero>
      <Box sx={{ textAlign: 'center', width: 'inherit', bgcolor: 'background.landing', color: 'primary.main', position: 'relative', boxShadow: '-2px -2px 20px black' }}>
        <div ref={ref}>
          <StyledArrow onClick={scrollToTarget} sx={{ mx: 0, mt: 3, color: 'black', fontSize: 'xx-large', fontWeight: 'bold', scale: '1.5'}} />
          <LandingValues />
        </div>
        <Divider variant="middle" sx={{ mx: 10, opacity: 0.3, color: 'primary.contrastText' }}>Top 5 Albums This Week</Divider>
        <LandingTrending />
        <Divider variant="middle" sx={{ mx: 10, opacity: 0.3, color: 'primary.contrastText' }} />
        <LandingGenres />
      </Box>
    </Box>
    
    );
};

export default Home;