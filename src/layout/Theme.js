import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90d676',
        // main: '#6bcb49',
        contrastText: '#000'
      },
      secondary: {
        main: '#92a695',
      },
      background: {
        default: "#292929",
        landing: "#fff",
        // landing: '#6d79c5',
        // landing: '#f0eef5',
        // default: "#1d1d1d",
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
      },
      divider: 'rgba(0, 0, 0, 0.5)'
    },
  });

export default theme;