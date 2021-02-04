import React from 'react';
import './App.css';
import AppBody from './components/AppBody';

function App() {
  return (
    <>
     <AppBody 
     image="https://images.unsplash.com/photo-1583001809898-006ebc1377c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
     clothName="Long Trench"
     price = "$35.00"
     description="A long trench is a coat variety made of waterproof heavy-duty cotton gabardine drill, leather, or poplin and has a removable insulated lining and raglan sleeves"
     />
    </>
  );
}

export default App;
