import Login from './Login';
import Employee from './Employee';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
      <Routes>
          <Route exact path='/'  element={<Login/>} />
          <Route path='/employee' element={<Employee/>} />   
      </Routes>
    </div>
  </Router>
  );
}

export default App;
