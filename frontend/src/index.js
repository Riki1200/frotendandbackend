import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';


let Root = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(Root, document.getElementById('root'));

serviceWorker.unregister();
