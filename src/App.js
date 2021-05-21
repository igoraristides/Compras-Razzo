import React, {useState} from 'react';

import { Router } from 'react-router-dom';
import Public from './pages/_layouts/Public/index';
import GlobalStyle from './styles/global';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
function App() {

  return (
  <Router history={history}>   
    <GlobalStyle/>
     <Public/>
     </Router>
    );
}

export default App;
