import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    const validadeTrunfo = hasTrunfo ? (
      <span className="haveTrunfo">
        Você já tem um Super Trunfo em seu baralho
      </span>)
      : (
        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>);

    return (
      <form>
        <label htmlFor="nameInput">
          Nome
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            id="nameInput"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descriptionInput">
          Descrição
          <textarea
            type="textArea"
            name="cardDescription"
            data-testid="description-input"
            id="descriptionInput"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          Speed
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Street
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          Park
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
          <span className="maxPoints">
            (max points = 210 && max att points = 90)
          </span>
        </label>
        <label htmlFor="imgInput">
          Imagem
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            id="imgInput"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            id="rarity"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {validadeTrunfo}
        <button
          type="submit"
          className="btn41-43 btn-41"
          data-testid="save-button"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
