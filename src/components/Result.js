import React from "react";
import drawOne from '../img/drawOne.gif';
import drawTwo from '../img/drawTwo.gif';
import winOne from '../img/winOne.gif';
import winTwo from '../img/winTwo.gif';
import loseOne from '../img/loseOne.gif';
import loseTwo from '../img/loseTwo.gif';

class Result extends React.Component {
  render() {
    const { wins, loses, returnHome } = this.props;
    const randomNum = Math.floor(Math.random() * 2);
    return (
      <div className="resultSec">
        {wins > loses && (<>
        <h2 className="winTitle" >Parabéns você venceu a partida!</h2>
        <img src={randomNum === 1 ? winOne : winTwo} alt="you win" className="resultImg" />
        </>)}
        {wins < loses && (<>
        <h2 className="loseTitle" >Que pena você perdeu</h2>
        <img src={randomNum === 1 ? loseOne : loseTwo} alt="lose" className="resultImg" />
        </>)}
        {wins === loses && (<>
        <h2 className="drawTitle" >Você empatou a partida</h2>
        <img src={randomNum === 1 ? drawOne : drawTwo} alt="you draw" className="resultImg" />
        </>)}
        <div className="battle-buttons">
        <button type="button" onClick={returnHome} className="btn41-43 btn-41">Voltar</button>
        </div>
      </div>
    );
  }
}

export default Result;
