import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';
import React, {useEffect, useState} from 'react';

function App() {
  
  const [armies, setArmies] = useState([])

  useEffect(
    ()=>
    {fetch('http://localhost:3000/armies').then(r=>r.json()).then(d=>setArmies(d))}, []
  )
  
  return (
    <div className="App">
      <Canvas armies={armies} />
    </div>
  );
}

export default App;
