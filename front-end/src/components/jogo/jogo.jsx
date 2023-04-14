import React, { useState } from "react";
import "./jogo.css";

const initialBoard = Array(9).fill("");

const Jogo = () => {
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const handleClick = (index) => {
    if (winner || board[index] !== "") return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const nextPlayer = player === "X" ? "O" : "X";
    setPlayer(nextPlayer);

    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        if (board[a] === "X") {
          setXScore(xScore + 1);
        } else {
          setOScore(oScore + 1);
        }
        return;
      }
    }

    const isBoardFull = board.every((item) => item !== "");
    if (isBoardFull) {
      setWinner("draw");
    }
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div className="container">
      <h1 className="title">Jogo da Velha</h1>
      <div className="board">
        {board.map((item, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {winner && (
        <div className="winner-message">
          {winner === "draw" ? "Empate" : `Vencedor: ${winner}`}
        </div>
      )}
      <div className="score">
        <div className="score-item">
          <span>Jogador X:</span> {xScore}
        </div>
        <div className="score-item">
          <span>Jogador O:</span> {oScore}
        </div>
      </div>
      <button className="reset-button" onClick={handleReset}>
        Resetar
      </button>
    </div>
  );
};

export default Jogo;
