/* eslint-disable react/prop-types */
import "./App.css";

import { useState } from "react";

export default function App() {
  const [xturn, setXturn] = useState(true);
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  const winnerLogic = (board) => {
    const winnerLiner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [2, 5, 8],
      [1, 4, 7]
    ];
    for (let i = 0; i < winnerLiner.length; i++) {
      const [a, b, c] = winnerLiner[i];
      // no null value
      // a = b x , x
      // b =c x, x
      if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
        console.log("winnser", board[a]);
      }
    }
  };
  console.log(winnerLogic(board));

  const handleClick = (id) => {
    // check box i empty
    if (!board[id]) {
      // make a copy
      console.log("board", board);
      const boardCopy = [...board];
      console.log("boardcopy", boardCopy);
      boardCopy[id] = xturn ? "X" : "O";
      setBoard(boardCopy);
      setXturn(!xturn);
    }
  };

  return (
    <div className="App">
      {board?.map((val, idx) => (
        <GameSqaure
          key={idx}
          val={val}
          onPlayersClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
}

function GameSqaure({ val, onPlayersClick }) {
  return (
    <div
      style={{ color: val == "X" ? "crimson" : "green" }}
      onClick={() => onPlayersClick()}
      className="game-box"
    >
      {val}
    </div>
  );
}
