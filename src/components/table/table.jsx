import React, { useMemo } from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import Card from "../table/card";
import data from "../data/weather.json";

const TabelaContainer = styled.div`
  margin: 5vh;
  text-align: center;
`

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
const { rows, prepareRow } = useTable({ columns, data });

  const groupDataByDay = () => {
    const groupedData = {};
    rows.forEach((row) => {
      const date = row.values["Data"];
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(row);
    });
    return groupedData;
  };

  return (
    <TabelaContainer>
      <h1>Tabela de Dados Meteorológicos</h1>
      <div>
        {Object.entries(groupDataByDay()).map(([day, dayRows]) => (
          <div key={day} className="day-table">
            <h2>{day}</h2>
            <div className="tabela">
              {dayRows.map((row) => {
                prepareRow(row);
                if (process.env.NODE_ENV !== "production") {
                  console.log("Dados passados para o Card:", row.original);
                }
                return <Card key={row.id} data={row.original} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </TabelaContainer>
  );
};

export default Tabela;