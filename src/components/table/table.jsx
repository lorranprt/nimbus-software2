import React, { useMemo, useState } from "react";
import { useTable, useFilters } from "react-table";
import styled from "styled-components";
import Card from "../table/card";
import data from "../data/weather.json";

const TabelaContainer = styled.div`
  margin: 5vh;
  text-align: center;
`;

const FiltrosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    padding: 8px;
    font-size: 14px;
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

  const { rows, prepareRow } = useTable(
    { columns, data },
    useFilters  // Habilita a funcionalidade de filtro
  );

  const [filters, setFilters] = useState({
    Data: "",
    precip_type: "",
    temperature_c: "",
    humidity: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const getUniqueValues = (accessor) => {
    const uniqueValues = new Set();
    rows.forEach((row) => {
      uniqueValues.add(row.values[accessor]);
    });
    return Array.from(uniqueValues);
  };

  const renderFilterOptions = (accessor) => {
    const uniqueValues = getUniqueValues(accessor);
    return (
      <select
        name={accessor}
        value={filters[accessor]}
        onChange={handleFilterChange}
      >
        <option value="">Todas</option>
        {uniqueValues.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    );
  };

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key]) {
          return true;
        }
        const cellValue = row.values[key];
        return cellValue
          .toString()
          .toLowerCase()
          .includes(filters[key].toLowerCase());
      });
    });
  }, [rows, filters]);

  const groupDataByDay = () => {
    const groupedData = {};
    filteredRows.forEach((row) => {
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
      <FiltrosContainer>
        {columns.map((column) => (
          <label key={column.accessor}>
            {column.Header}
            {renderFilterOptions(column.accessor)}
          </label>
        ))}
      </FiltrosContainer>
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



