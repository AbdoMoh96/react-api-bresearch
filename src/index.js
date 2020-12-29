import React from 'react';
import ReactDOM from 'react-dom';
import Web from './Routes/Web'
import { BrowserRouter as Router } from 'react-router-dom'




ReactDOM.render(
  <Router>
      <Web />
  </Router>,
  document.getElementById('root')
);
