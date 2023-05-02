import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Box } from '@mui/material';
import Header from './components/header';
import CurrentTab from './components/currentTab';
import OurStory from './components/ourStory';
import Features from './components/features';
import Information from './components/information';
import Footer from './components/footer'
import Founders from './components/founders';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Box padding={'0px 8.4375em'}>
        <CurrentTab/>
        <OurStory/>
        <Information/>
        <Founders/>
        <Features/>
      </Box>
      <Footer/>
      
    </ThemeProvider>
  );
}

export default App;
