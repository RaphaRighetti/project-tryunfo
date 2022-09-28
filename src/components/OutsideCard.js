import React from 'react';
import PropTypes from 'prop-types';
import NewCard from './NewCard';

class OutsideCard extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;

    return (
      <div className="card">
        <div className="insideBorder">
          <div className="insideCard">
            <NewCard
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
      </div>
    );
  }
}

OutsideCard.defaultProps = {
  cardName: 'titulo',
  cardImage: 'http://4.bp.blogspot.com/-nCRuuIIK7Bk/VVUbUSNT16I/AAAAAAAAA8M/CP3mDt2s6Gk/s1600/uw-2010-06-11.jpg',
  cardDescription: 'Aqui vai a descrição do card',
  cardAttr1: '7',
  cardAttr2: '7',
  cardAttr3: '7',
  cardTrunfo: false,
  cardRare: 'normal',
};

OutsideCard.propTypes = {
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  cardRare: PropTypes.string,
};

export default OutsideCard;
