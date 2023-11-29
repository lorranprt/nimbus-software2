import React, { useState } from 'react';
import Header from './components/header'; 
import Footer from './components/footer/footer'; 
import MapComponent from './components/map/map'; 
import ChartComponent from './components/grafico/chart';
import TableComponent from './components/table/table'; 
import styled from 'styled-components';
import FilterComponent from './components/Filter/filter';


const App = () => {
  const [selectedFormat, setSelectedFormat] = useState('map'); 

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const CenteredContainer = styled.div`
    background-color: #779a9b;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  `;

  const StyledFormatoGroup = styled.div`
    border-radius: 10px;
    overflow: hidden;
  `;

  const StyledSelect = styled.select`
    background-color: blue;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
  `;

  const renderSelectedComponent = () => {
    switch (selectedFormat) {
      case 'filter':
        return <FilterComponent/>;
      case 'map':
        return <MapComponent />;
      case 'graph':
        return <ChartComponent />;
      case 'table':
        return <TableComponent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <main>
        <CenteredContainer>
          <div className='buttons'>
            <StyledFormatoGroup>
              <StyledSelect
                value={selectedFormat}
                onChange={handleFormatChange}
              >
                <option value="filter">Filtro</option>
                <option value="map">Mapa</option>
                <option value="graph">Grafico</option>
                <option value="table">Tabela</option>
              </StyledSelect>
            </StyledFormatoGroup>
          </div>
        </CenteredContainer>
            {renderSelectedComponent()}
      </main>

    </div>
  );
};


export default App;
