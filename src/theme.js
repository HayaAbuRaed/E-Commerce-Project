import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#000000',
    },
    secondary: {
        main: '#ffffff',
    },
    text: {
        primary: '#000000',
        secondary: '#ffffff',
    },
  },

    typography: {
      h1: {
        fontWeight: 700,
        fontFamily:'Inter, sans-serif'
      },
    },
  
});

export default theme;
