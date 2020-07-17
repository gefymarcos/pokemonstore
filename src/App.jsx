import React from 'react';
import 'fontsource-roboto';
import './App.css';
import Toolbar from './components/Toolbar/toolbar';
import Product from './components/Product/product';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <div style={{ display: 'flex' }}>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
