import React from 'react';

import { Container } from './views/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'



const App = ({ props }) => (
  <HelmetProvider>
    <Router>
      <Container  {...props} />
    </Router>
  </HelmetProvider>
);


export default App;
