/*
 * @description: 
 * @Author: 魏展涛
 * @Creat: 2019-07-02 15:57:42
 * @lastTime: 2019-08-30 17:42:17
 * @LastAuthor: 魏展涛
 */
import React from 'react';
import Square from './Square'
export default class Game extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     squares:Array(9).fill(null),
  //     xIsNext:true,
  //   }
  // }
  // handleClick(i){
  //   console.log(i, this.state)
  //   const squares = this.state.squares.slice()
  //   if(calculateWinner(squares)||squares[i]){
  //     return 
  //   }
  //   squares[i] = this.state.xIsNext?'x':'o'
  //   this.setState({
  //     squares:squares,
  //     xIsNext:!this.state.xIsNext
  //   })
  // }
  renderSquare(i) {
    return <Square 
            value={this.props.squares[i]} 
            onClick={()=>{this.props.onClick(i)}} 
            />;
  }
  render() {
    // const status = 'Next player: '+(this.state.xIsNext?'x':'o')
    // const winner = calculateWinner(this.state.squares)
    // let status;
    // if(winner){
    //   status = 'winner:'+winner
    // }else{
    //   status = 'Next player: '+(this.state.xIsNext?'x':'o')
    // }
    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }