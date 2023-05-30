import { Cell } from './Cell';

function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;
  const textTitle = winner ? 'Ganador' : 'Empate';
  return (
    <section className="winner">
      <h2>{textTitle}</h2>
      <article className="modal-text">
        <Cell>{winner}</Cell>
        <button onClick={resetGame}>Volver a jugar</button>
      </article>
    </section>
  );
}

export default WinnerModal;
