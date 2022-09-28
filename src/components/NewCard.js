import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/super-trunfo-logo.png';

class NewCard extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    const trunfoImg = cardTrunfo ? (
      <>
        <span
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
        <div className="title">
          <span className="cardRare">{cardRare}</span>
          <i>{cardName}</i>
        </div>
        <img
          className="cardImage"
          src={ cardImage }
          alt={ cardName }
        />
        <div className="cardInfo">
          {cardDescription}
          <div className="cardAtt">
            <span>
              {' '}
              Speed ⇢
              {' '}
              {cardAttr1}
              {' '}
            </span>
            <span>
              {' '}
              Street ⇢
              {' '}
              {cardAttr2}
              {' '}
            </span>
            <span>
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

NewCard.defaultProps = {
  cardName: 'titulo',
  cardImage: 'http://4.bp.blogspot.com/-nCRuuIIK7Bk/VVUbUSNT16I/AAAAAAAAA8M/CP3mDt2s6Gk/s1600/uw-2010-06-11.jpg',
  cardDescription: 'Aqui vai a descrição do card',
  cardAttr1: '7',
  cardAttr2: '7',
  cardAttr3: '7',
  cardTrunfo: false,
  cardRare: 'normal',
};

NewCard.propTypes = {
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  cardRare: PropTypes.string,
};

export default NewCard;
