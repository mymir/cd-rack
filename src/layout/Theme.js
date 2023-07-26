import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1a1a1a',
        // light: '#ba68c8',
        // dark: '#7b1fa2',
        // contrastText: '#fff',
      },
      secondary: {
        main: 'rgba(0, 0, 0, 0)',
        // light: 'rgba(255, 255, 255, 0.4)',
        // dark: 'rgba(0, 0, 0, 0.4)',
        // contrastText: '#fff',
      },
      background: {
        default: "#222",
        paper: "#222",
        home: "#abc2ae"
      },
      text: {
        primary: "#fff",
        // secondary: "#92a695"
        secondary: "#abc2ae"
      }
    },
  });

export default theme;