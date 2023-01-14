import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import router from './router';

export function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header title="Technical assesment" />
        <Box sx={{ mt: 3 }}>
          <RouterProvider router={router} />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
