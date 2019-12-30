import React from "react";
import Square from "./Square.js";

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}hola
          {this.renderSquare(4)}hey
          {this.renderSquare(5)}caca
        </div>
        <div className="board-row">
          {this.renderSquare(6)}pedo
          {this.renderSquare(7)}culo
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
