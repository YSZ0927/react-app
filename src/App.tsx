import React from 'react';
import { Provider } from 'react-redux'
// import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import store from './store'
import BasicRouter from './router'
// import 'moment/locale/zh-cn';
// import 'antd/dist/antd.css';


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
