import React, { useState } from 'react';
import './filter.css';

const FilterForm = () => {
  const [filter, setFilter] = useState({
    data: '',
    temperatura: '',
    temperaturaAparente: '',
    umidade: '',
    tipoPrecipitacao: '',
    visibilidade: '',
    velocidadeVento: '',
    resumoDiario: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Filtro enviado:', filter);
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <h2>Filtrar Resultados</h2>

      <div className="filter-row">
        <div className="filter-input">
          <label>Data:</label>
          <select name="data" value={filter.data} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>

          </select>
        </div>

        <div className="filter-input">
          <label>Temperatura:</label>
          <select name="temperatura" value={filter.temperatura} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>


          </select>
        </div>
      </div>
      <div className="filter-row">
        <div className="filter-input">
          <label>Temperatura Aparente:</label>
          <select name="temperaturaAparente" value={filter.temperaturaAparente} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>

          </select>
        </div>

        <div className="filter-input">
          <label>Umidade:</label>
          <select name="umidade" value={filter.umidade} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>

          </select>
        </div>
      </div>

      <div className="filter-row">
        <div className="filter-input">
          <label>Tipo de Precipitação:</label>
          <select name="tipoPrecipitacao" value={filter.tipoPrecipitacao} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>

          </select>
        </div>

        <div className="filter-input">
          <label>Visibilidade:</label>
          <select name="visibilidade" value={filter.visibilidade} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>

          </select>
        </div>
      </div>
    <div className="filter-row">
        <div className="filter-input">
          <label>Velocidade do Vento:</label>
          <select name="velocidadeVento" value={filter.velocidadeVento} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>

          </select>
        </div>

        <div className="filter-input">
          <label>Resumo Diário:</label>
          <select name="resumoDiario" value={filter.resumoDiario} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>

          </select>
        </div>
      </div>

      <button type="submit">Filtrar</button>
    </form>
  );
};

export default FilterForm;