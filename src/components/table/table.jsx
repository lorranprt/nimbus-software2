import React, { useMemo } from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import Card from "../table/card";
import data from "../data/weather.json";

const TabelaContainer = styled.div`
  padding: 5vw;
  margin: 15vh;
  
  text-align: center;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
  }
`;

const Tabela = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Data",
        accessor: "Data",
      },
      {
        Header: "Tipo de Precipitação",
        accessor: "precip_type",
      },
      {
        Header: "Temperatura (Celsius)",
        accessor: "temperature_c",
      },
      {
        Header: "Temperatura Aparente (Celsius)",
        accessor: "apparent_temperature_c",
      },
      {
        Header: "Umidade",
        accessor: "humidity",
      },
      {
        Header: "Velocidade do Vento (km/h)",
        accessor: "wind_speed_kmh",
      },
      {
        Header: "Visibilidade (km)",
        accessor: "visibility_km",
      },
      {
        Header: "Resumo Diário",
        accessor: "Resumo Diário",
      },
    ],
    []
  );

  const { rows, prepareRow } =
    useTable({ columns, data });

  return (
    <TabelaContainer>
      <h1>Tabela de Dados Meteorológicos</h1>
      <div className="tabela">
        {rows.map((row) => {
          prepareRow(row);
          console.log("Dados passados para o Card:", row.original);
          return <Card key={row.id} data={row.original} />;
        })}
      </div>
    </TabelaContainer>
  );
};

export default Tabela;
