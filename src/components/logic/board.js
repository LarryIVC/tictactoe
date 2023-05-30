import { WINNER_COMB } from "./consts";

export const checkWinner = (checkBoard) => {
  for(const combi of WINNER_COMB){
    const [a,b,c] = combi;
    if(checkBoard[a] &&
      checkBoard[a]===checkBoard[b] &&
      checkBoard[a]===checkBoard[c]){
        return checkBoard[a];
      }
  }
  return null;
}
export const endGame = (newBoard) => {
  if(newBoard.every((cell) => cell !== null)) return true;
}