import { useState } from "react";
import styles from "./styles.module.css";

const SIZE = 3;

const getInitialState = () =>
  new Array(SIZE * SIZE).fill().reduce((acc, _, index) => {
    acc.set(index, "");
    return acc;
  }, new Map());

const rowWinner = new Array(SIZE).fill().map((_, i) => new Array(SIZE).fill().map((_, j) => i * SIZE + j));

const columnWinner = new Array(SIZE).fill().map((_, i) => new Array(SIZE).fill().map((_, j) => i + j * SIZE));

const crossWinner = new Array(SIZE).fill().map((_, i) => i * SIZE + i);
const otherCrossWinner = new Array(SIZE).fill().map((_, i) => i * SIZE + SIZE - i - 1);
const winningCombos = [...rowWinner, ...columnWinner, crossWinner, otherCrossWinner];

const checkWinner = (board) => {
  if (winningCombos.some((combo) => combo.every((id) => board.get(id) === "X"))) {
    return "X";
  }
  if (winningCombos.some((combo) => combo.every((id) => board.get(id) === "O"))) {
    return "O";
  }
  return;
};

const Block = ({ id, value, tick }) => {
  return (
    <div className={styles.block} onClick={() => tick(id)}>
      {value}
    </div>
  );
};

const App = () => {
  const [board, setBoard] = useState(getInitialState());
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [points, setPoints] = useState([0, 0]);

  const tick = (id) => {
    if (board.get(id) !== "" || winner !== null) {
      return;
    }
    board.set(id, currentPlayer);
    const foundWinner = checkWinner(board);
    if (foundWinner) {
      setWinner(foundWinner);
      setPoints(foundWinner === "X" ? [points[0] + 1, points[1]] : [points[0], points[1] + 1]);
    }
    if (Array.from(board).every(([_, value]) => value !== "")) {
      setWinner("Nobody");
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div>
      <div className={styles.information}>
        <div className={styles.points}>{`${points[0]} : ${points[1]}`}</div>
        {winner && <div className={styles.winner}>{winner === "Nobody" ? "No one wins" : `Winner is ${winner}!!!`}</div>}
        <button
          onClick={() => {
            setBoard(getInitialState());
            setWinner(null);
          }}
        >
          Reset
        </button>
      </div>
      <div className={styles.container}>
        {Array.from(board).map(([_, value], index) => (
          <Block key={index} id={index} value={value} tick={tick} />
        ))}
      </div>
    </div>
  );
};

export default App;
