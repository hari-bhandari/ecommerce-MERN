import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
function App() {
  return (
    <div className="App">
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
