import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { onInputChange, nameFilter, trunfoFilter,
      rareFilter, handleTrunfoFilter } = this.props;
    return (
      <div className="filters">
        <h2>Filtros</h2>
        <label htmlFor="nameFilter">
          Nome
          <input
            type="text"
            id="nameFilter"
            name="nameFilter"
            data-testid="name-filter"
            onChange={ onInputChange }
            value={ nameFilter }
            disabled={ trunfoFilter }
          />
        </label>
        <label htmlFor="rarityFilter">
          Raridade
          <select
            id="rarityFilter"
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ onInputChange }
            value={ rareFilter }
            disabled={ trunfoFilter }
          >
            <option value="todas">Todos</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            className="checkFilter"
            id="trunfoFilter"
            name="trunfoFilter"
            onChange={ handleTrunfoFilter }
            checked={ trunfoFilter }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  handleTrunfoFilter: PropTypes.func.isRequired,
};

export default Filter;
