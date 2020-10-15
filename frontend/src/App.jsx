import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './views/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'

const Theme = {
  main: 'black'
}


const App = () => (
  <HelmetProvider>
    <Router>
      <ThemeProvider theme={Theme}>
        <Container />
      </ThemeProvider>
    </Router>
  </HelmetProvider>
);


export default App;
