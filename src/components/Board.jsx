import { Cell } from "./Cell";

function Board({ board, updateBoard }) {
  return (
    <section className="game">
    {board.map((cell, index) => {
      return (
        <Cell key={index} index={index} updateBoard={updateBoard}>
          {cell}
        </Cell>
      );
    })}
</section>
  )
}

export default Board


