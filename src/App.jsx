import { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';
import { TURNS } from './components/logic/consts';
import { Cell } from './components/Cell';
import { checkWinner, endGame } from './components/logic/board';

//Array(9).fill(null)
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner,setWinner] = useState(null);

  const updateBoard = (index) => {
    //si ya hay dato no escriba
    if(board[index] || winner) return;
    //cambiar el turno
    const newTurn = turn ===TURNS.X ? TURNS.O: TURNS.X;
    setTurn(newTurn);
    // actulizara el tablero
    const newBoard = [...board]
    newBoard[index]=turn;
    setBoard(newBoard);
    //verificar si hay ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti();
      setWinner(newWinner)
    } else if(endGame(newBoard)){
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }
  return (
    <main className="board">
      <button onClick={resetGame}>Limpiar</button>
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((cell, index) => {
          return (
            <Cell key={index} index={index} updateBoard={updateBoard}>
              {cell}
            </Cell>
          );
        })}
      </section>

      <section className="turn">
        <Cell isSelected={turn === TURNS.X}>{TURNS.X}</Cell>
        <Cell isSelected={turn === TURNS.O}>{TURNS.O}</Cell>
        
      </section>

      {winner!==null && (
        <section className='winner'>
          <h2>
            {winner===false ? 'Empate': 'Ganador'}
          </h2>
          <article className='modal-text'>
            <Cell>{winner}</Cell>
            <button onClick={resetGame}>Volver a jugar</button>
          </article>

        </section>
      )}
    </main>
  );
}

export default App;
