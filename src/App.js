import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Box } from '@mui/material';
import Header from './components/header';
import CurrentTab from './components/currentTab';

// import Footer from './components/footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Box padding={'0px 9.4%'}>
        <CurrentTab/>
      </Box>
      {/* <Footer/> */}
      
    </ThemeProvider>
  );
}

export default App;
