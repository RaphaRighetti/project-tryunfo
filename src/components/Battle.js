import React from 'react';
import HandCard from './HandCard';

class Battle extends React.Component {
  makeTitle = () => {
    const { userCard, rivalCard, win, lose } = this.props;
    if (userCard.trunfo || (win && !rivalCard.trunfo)) {
      return (<h2 className="winTitle">Você venceu essa rodada!</h2>);
    }
    if (rivalCard.trunfo || (lose && !userCard.trunfo)) {
      return (<h2 className="loseTitle">Você perdeu essa rodada!</h2>);
    }
    return (<h2 className="drawTitle">Você empatou essa rodada!</h2>);
  };

  render() {
    const { userCard, rivalCard, nextRound, round, endMatch } = this.props;

    const nextBtn = (<button type="button" onClick={ nextRound } className="btn41-43 btn-41">Próxima rodada</button>);

    const endBtn = (<button type="button" onClick={ endMatch } className="btn41-43 btn-41">Finalizar Partida</button>);

    const title = this.makeTitle();

    return (
      <div className="battleSec">
        {title}
        <div className="cardsBattle">
          <HandCard card={ userCard } key={ userCard.id } hoverCard={ false } clickMiniCard={ () => true } idOn={ `${userCard.id}-battle` } />
          <h2>Vs</h2>
          <HandCard card={ rivalCard } key={ rivalCard.id } hoverCard={ false } clickMiniCard={ () => true } idOn={ `${rivalCard.id}-battle` } />
        </div>
        <div className="battle-buttons">
          {round === 6 ? endBtn : nextBtn}
        </div>
      </div>
    );
  }
}

export default Battle;
