import React from 'react';
import BasicRouter from './router'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Tabs from '@/components/Tabs'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/home">home</Link>
          <Link to="/wechat">wechat</Link>
        </div>
        <BasicRouter/>
        <Tabs></Tabs>
      </Router>
    </div>
  );
}

export default App;
