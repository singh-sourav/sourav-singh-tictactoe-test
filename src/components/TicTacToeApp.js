import React from 'react';
import Matrix from './Matrix';

class TicTacToeApp extends React.Component {
  state={
    yourTurn: true,
    winner: null,
    winTrace: [],
    gameStatus: Array(9).fill(null),
    totalTries: 0,
    gameTie: false,
  }

  giveInput=(blockNumber) => {
    if (!this.state.winner && this.state.totalTries < 9) {
      const valueToFill = this.state.yourTurn ? '0' : 'X';
      const newGameStatus = this.state.gameStatus;
      newGameStatus[blockNumber] = valueToFill;
      this.setState(prevState => (
        {
          gameStatus: newGameStatus,
          yourTurn: !prevState.yourTurn,
          totalTries: prevState.totalTries + 1,
        }), () => this.decideWinner(this.state.gameStatus));
    } else {
      this.startGameAgain();
    }
  }


decideWinner=(gameStatus) => {
  if (this.state.totalTries === 9) {
    this.setState({
      gameTie: true,
    });
    return;
  }
  const winningConfigurations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < winningConfigurations.length; i++) {
    if (gameStatus[winningConfigurations[i][0]] && gameStatus[winningConfigurations[i][0]] === gameStatus[winningConfigurations[i][1]] && gameStatus[winningConfigurations[i][1]] === gameStatus[winningConfigurations[i][2]]) {
      this.setState({
        winner: gameStatus[winningConfigurations[i][2]],
        winTrace: winningConfigurations[i],
      });
    }
  }
}

startGameAgain=() => {
  this.setState({
    gameStatus: Array(9).fill(null),
    yourTurn: true,
    winner: null,
    winTrace: [],
    totalTries: 0,
    gameTie: false,
  });
}

render() {
  const winningState = this.state.winner ? (this.state.winner === '0' ? 'Yayyyyyyy !!!  You Won' : 'Ooooppssss !!! You Lose') : null;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>TIC-TAC-TOE</h1>
      {this.state.gameTie && <h1 style={{ textAlign: 'center', color: this.state.yourTurn ? 'green' : 'blue' }}>It's a TIE</h1> }
      {winningState == null && !this.state.gameTie && <h1 style={{ textAlign: 'center', color: this.state.yourTurn ? 'green' : 'blue' }}>{this.state.yourTurn ? 'Your Turn ("0")' : 'Computer\'s Turn ("X")'}</h1>}
      <h1 style={{ textAlign: 'center' }}>{winningState}</h1>
      <Matrix winTrace={this.state.winTrace} giveInput={this.giveInput} gameStatus={this.state.gameStatus} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <button
          style={{
            fontSize: 20, backgroundColor: 'grey', color: 'white', padding: 5, borderRadius: 8,
          }}
          onClick={this.startGameAgain}
        >
        Start again
        </button>
      </div>
    </div>
  );
}
}



export default TicTacToeApp;
