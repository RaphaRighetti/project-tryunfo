import React from "react";
import logo from '../img/super-trunfo-logo.png';

class HandCard extends React.Component {
  render() {
    const { card } = this.props;
    const trunfoImg = card.trunfo ? (
      <>
        <span
          className="trunfoLogo-test"
        >
          Super Trunfo
        </span>
        <img
          src={logo}
          className="trunfoLogoMini"
          alt="Super Trunfo"
        />
      </>
    ) : '';
    return (
      <div className="cardMini">
        <div className="insideBorderMini">
          <div className="insideCardMini">
            <div className="titleMini">
              <i>{card.name}</i>
            </div>
            <img
              className="cardImageMini"
              src={card.image}
              alt={card.name}
            />
            <div className="cardInfoMini">
              <div className="cardAttMini">
                <span>
                  {' '}
                  Speed ⇢
                  {' '}
                  {card.att[0]}
                  {' '}
                </span>
                <span>
                  {' '}
                  Street ⇢
                  {' '}
                  {card.att[1]}
                  {' '}
                </span>
                <span>
                  {' '}
                  Park ⇢
                  {' '}
                  {card.att[2]}
                  {' '}
                </span>
                {trunfoImg}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HandCard;
