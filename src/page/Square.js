/*
 * @description: 
 * @Author: 魏展涛
 * @Creat: 2019-07-02 15:57:58
 * @lastTime: 2019-08-30 16:52:22
 * @LastAuthor: 魏展涛
 */
import React from 'react';
// export default class Square extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       value : null,
//     }
//   }
//   render() {
//     return (
//       <button 
//         className="square"
//         onClick={()=>{this.props.onClick()}}>
//         {this.props.value}
//       </button>
//     );
//   }
// }
function Square(props){
  return (
    <button 
      className="square"
      onClick={props.onClick}>
      {props.value}
    </button>
  )
}
// ReactDOM.render(<Square name="yourName" />, Square)
export default Square