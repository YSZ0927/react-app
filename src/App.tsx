import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import store from './store'
import BasicRouter from './router'


function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={createBrowserHistory()}>
        <BasicRouter/>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
