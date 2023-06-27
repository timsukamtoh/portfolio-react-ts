import React, { ReactComponentElement, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navigation from '../navigation/Navigation';
import RouteList from '../routes/RouteList';

function App(): ReactElement {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <RouteList></RouteList>
      </BrowserRouter>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
