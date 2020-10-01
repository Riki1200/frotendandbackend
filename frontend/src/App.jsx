import React from 'react';
import { Container } from './views/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'



const App = () => (
  <HelmetProvider>
    <Router>
      <Helmet title='Iniciar session | Registrase' />
      <Container />
    </Router>
  </HelmetProvider>
);


export default App;
