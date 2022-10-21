import React from 'react';

class Game extends React.Component {
  render() {
    const { round, wins, loses } = this.props;
    return (
      <div className="game-stats">
        <p>
          Rodadas:
          {' '}
          {round}
          /6
        </p>
        <p>
          Vitórias:
          {' '}
          {wins}
        </p>
        <p>
          Derrotas:
          {' '}
          {loses}
        </p>
      </div>
    );
  }
}

export default Game;
