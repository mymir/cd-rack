import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90d676',
      },
      secondary: {
        main: '#92a695',
      },
      background: {
        default: "#292929",
        paper: "#1a1a1a"
      },
      text: {
        primary: "#fff",
        secondary: '#90d676',
        disabled: "#556257",
        icon: "#fff",
      },
      action: {
        disabled: '#878787'
      }
    },
  });

export default theme;