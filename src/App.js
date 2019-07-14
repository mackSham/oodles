import React from 'react';
import logo from './logo.svg';
import Header from './layouts/header';
import HeaderBox from './components/header-box';
import ServiceBox from './components/service-box'
import './App.css';
import TrendBox from './components/trend-box';

function App() {
  return (
    <React.Fragment>
      <HeaderBox />
      <ServiceBox />
      <TrendBox />
    </React.Fragment>
  );
}


export default App;
