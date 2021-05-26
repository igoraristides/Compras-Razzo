import React, {useState} from 'react';

import { Router } from 'react-router-dom';
//import Public from './pages/_layouts/Public/index';
import Routes from './routes/index';
import GlobalStyle from './styles/global';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
function App() {

  return (
  <Router history={history}>   
    <GlobalStyle/>
     <Routes/>
     </Router>
    );
}

export default App;
