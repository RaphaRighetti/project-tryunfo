import React from "react";
import logo from '../img/super-trunfo-logo.png';

class HandCard extends React.Component {
  render() {
    const { card, clickMiniCard, hoverCard, idOn } = this.props;
    const trunfoImg = card.trunfo ? (
      <>
        <span
          id={idOn}
          className="trunfoLogo-test"
        >
          Super Trunfo
        </span>
        <img
          id={idOn}
          src={logo}
          className="trunfoLogoMini"
          alt="Super Trunfo"
        />
      </>
    ) : '';
    return (
      <div className={hoverCard ? "cardMini hoverMiniCard" : "cardMini" } id={idOn} onClick={clickMiniCard} >
        <div className="insideBorderMini" id={idOn}>
          <div className="insideCardMini" id={idOn}>
            <div className="titleMini" id={idOn}>
              <i id={idOn}>{card.name}</i>
            </div>
            <img
              className="cardImageMini"
              src={card.image}
              alt={card.name}
              id={idOn}
            />
            <div className="cardInfoMini" id={idOn}>
              <div className="cardAttMini" id={idOn}>
                <span id={idOn}>
                  {' '}
                  Speed ⇢
                  {' '}
                  {card.att[0]}
                  {' '}
                </span>
                <span id={idOn}>
                  {' '}
                  Street ⇢
                  {' '}
                  {card.att[1]}
                  {' '}
                </span>
                <span id={idOn}>
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
