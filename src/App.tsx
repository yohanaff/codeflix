import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <Box>
    <Typography variant='h3' component='h1'>
      Home
    </Typography>
  </Box>
);

const About = () => (
  <Box>
    <Typography variant='h3' component='h1'>
      About
    </Typography>
  </Box>
)

export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component='main'
        sx={{
          height: '100vh',
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider >
  );
}

export default App;
