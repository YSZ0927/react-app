import React from 'react';
import BasicRouter from './router'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <BasicRouter/>
    </Router>
  );
}

export default App;
