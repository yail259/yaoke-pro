import React from 'react';

const Square = ({value}) => {
    return (
        <button className="square" onClick={() => console.log('click')}>
          {value}
        </button>
    );
}
  
const Board = () => {
    const status = 'Next player: X';

    return(
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            <Square value={0}/>
            <Square value={1}/>
            <Square value={2}/>
          </div>
          <div className="board-row">
            <Square value={3}/>
            <Square value={4}/>
            <Square value={5}/>

          </div>
          <div className="board-row">
            <Square value={6}/>
            <Square value={7}/>
            <Square value={8}/>
          </div>
        </div>
    )
}


const Tictactoe = () => {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        
    )
}

export default Tictactoe;
  
  