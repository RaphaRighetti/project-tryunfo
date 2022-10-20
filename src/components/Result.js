import React from "react";

class Result extends React.Component {
  render() {
    const { wins, loses, returnHome } = this.props;
    return (
      <div className="resultSec">
        {wins > loses && <h2>Parabéns você venceu a partida!</h2>}
        {wins < loses && <h2>Que pena você perdeu</h2>}
        {wins === loses && <h2>Você empatou a partida</h2>}
        <div className="battle-buttons">
        <button type="button" onClick={returnHome} className="btn41-43 btn-41">Voltar</button>
        </div>
      </div>
    );
  }
}

export default Result;
