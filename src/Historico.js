import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import Header from './components/header'; 
import MapComponent from './components/map/map'; 
import ChartComponent from './components/grafico/chart';
import TableComponent from './components/table/table'; 
import FilterComponent from './components/Filter/filter';



function Historico() {
    return (
      <div>
        <Header/>
        <FilterComponent/>
        <MapComponent />
        <ChartComponent />
        <TableComponent />
      </div>
      
    );
  }

  export default Historico