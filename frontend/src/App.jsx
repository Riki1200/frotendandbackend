import React from 'react';
import { Container } from './views/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'



const App = () => (
  <HelmetProvider>
    <Router>
      <Container />
    </Router>
  </HelmetProvider>
);


export default App;
