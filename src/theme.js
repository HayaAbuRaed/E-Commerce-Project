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
    typography: {
        fontFamily: 'Poppins, sans-serif',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        '@import': "url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap')",
    },
  },
  
});

export default theme;
