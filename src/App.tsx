import React from 'react';
import BasicRouter from './router'
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/home">home</Link>
          <Link to="/wechat">wechat</Link>
        </div>
        <BasicRouter/>
      </Router>
    </div>
  );
}

export default App;
