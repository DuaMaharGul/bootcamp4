import React from 'react';
import './litRoom.js';
import './logo.svg';
import './App.css';
import './Room.css';


// function App() {

//   return (
//     <litRoom>
      
//     </litRoom>
//   );
// }

// export default App;

function Room() {
  // const state = React.useState(true);
  // const isLit = state[0];
  // const setLit = state[1];
  // console.log("State = ", state);

  let [isLit, setLit] = React.useState(true);
 // function updateLit() {
 //   console.log("Button Clicked"); removed bcuz single line code no {}
 //   setLit(!isLit);}

  let [temp, setTemp] = React.useState(25);
  // turned into arrow function


  return (
    // template string in room class 
    <div className={`room ${isLit? "lit":"dark"}`}>
      This Room is {isLit ? 'Lit' : 'Dark'}
      <br/> 
      <button className= "on" onClick={ () => setLit(true)
                      }>On</button>
      <button className= "off" onClick={ () => setLit(false)
                      }>Off</button>
      <br/> 
      <br/>
      Temperature : {temp} C
      <br/>
      <button className= "increase" onClick={() => {
                              console.log("increaseAge Arrow Func");
                              setTemp(++temp);
                             }}>+</button>
      <button className= "decrease" onClick={() => {
                              console.log("decreaseAge Arrow Func");
                              setTemp(--temp);
                             }}>-</button>
    </div>
  );
}

export default Room;