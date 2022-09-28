import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/super-trunfo-logo.png';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;

    const trunfoImg = cardTrunfo ? (
      <>
        <span
          data-testid="trunfo-card"
          className="trunfoLogo-test"
        >
          Super Trunfo
        </span>
        <img
          src={ logo }
          className="trunfoLogo"
          alt="Super Trunfo"
        />
      </>
    ) : '';

    return (
      <>
        <div className="title" data-testid="name-card">
          <span className="cardRare" data-testid="rare-card">{cardRare}</span>
          <i>{cardName}</i>
        </div>
        <img
          className="cardImage"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <div className="cardInfo" data-testid="description-card">
          {cardDescription}
          <div className="cardAtt">
            <span data-testid="attr1-card">
              {' '}
              Speed ⇢
              {' '}
              {cardAttr1}
              {' '}
            </span>
            <span data-testid="attr2-card">
              {' '}
              Street ⇢
              {' '}
              {cardAttr2}
              {' '}
            </span>
            <span data-testid="attr3-card">
              {' '}
              Park ⇢
              {' '}
              {cardAttr3}
              {' '}
            </span>
            {trunfoImg}
          </div>
        </div>
      </>
    );
  }
}

Card.defaultProps = {
  cardName: 'titulo',
  cardImage: 'http://4.bp.blogspot.com/-nCRuuIIK7Bk/VVUbUSNT16I/AAAAAAAAA8M/CP3mDt2s6Gk/s1600/uw-2010-06-11.jpg',
  cardDescription: 'Aqui vai a descrição do card',
  cardAttr1: '7',
  cardAttr2: '7',
  cardAttr3: '7',
  cardTrunfo: false,
  cardRare: 'normal',
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  cardRare: PropTypes.string,
};

export default Card;
