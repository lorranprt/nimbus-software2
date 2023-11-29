import React from 'react';
import styled from 'styled-components';
import jsonData from '../data/weather.json';

const CardGridContainer = styled.div`
column-count: 2;
-webkit-column-count: 2;
-moz-column-count: 2;
column-gap: 50px;
-webkit-column-gap: 50px;
-moz-column-gap: 50px;
column-rule: 3px double #000000;
-webkit-column-rule: 3px double #000000;
-moz-column-rule: 3px double #000000;
border-bottom: 10px;
`;


const CardContainer = styled.div`
width: 300px;
margin: auto;
text-align: left;
padding: 20px;
border: 1px solid #ccc;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 12px;
`;

const CardBody = styled.div`
  font-size: 14px;
`;

const CardGrid = () => {
  return (
    <CardGridContainer>
      {jsonData.map((item, index) => (
        <CardContainer key={index}>
          <CardHeader>{item.Data}</CardHeader>
          <CardBody>
            <div>
              <strong>Tipo de Precipitação:</strong> {item["Tipo de Precipitação"]}
            </div>
            <div>
              <strong>Temperatura (Celsius):</strong> {item["Temperatura (Celsius)"]}
            </div>
            <div>
              <strong>Temperatura Aparente (Celsius):</strong>{" "}
              {item["Temperatura Aparente (Celsius)"]}
            </div>
            <div>
              <strong>Umidade:</strong> {item.Umidade}
            </div>
            <div>
              <strong>Velocidade do Vento (km/h):</strong> {item["Velocidade do Vento (km/h)"]}
            </div>
            <div>
              <strong>Visibilidade (km):</strong> {item["Visibilidade (km)"]}
            </div>
            <div>
              <strong>Resumo Diário:</strong> {item["Resumo Diário"]}
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </CardGridContainer>
  );
};

export default CardGrid;
