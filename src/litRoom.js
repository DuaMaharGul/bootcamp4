import React, {useState} from 'react';
import './Room.css';

function Room() {
  // const state = React.useState(true);
  // const isLit = state[0];
  // const setLit = state[1];
  // console.log("State = ", state);

  let [isLit, setLit] = React.useState(false);
 // function updateLit() {
 //   console.log("Button Clicked"); removed bcuz single line code no {}
 //   setLit(!isLit);}

  let [age, setAge] = React.useState(10);
  // turned into arrow function


  return (
    // template string in room class 
    <div className={`room ${isLit? "lit":"dark"}`}>
      This Room is {isLit ? 'Lit' : 'Dark'}
      <br/> 
      <button onClick={ () => setLit(!isLit)
                      }>Ligth Switch</button>
      <br/> 
      <br/>
      Age : {age}
      <br/>
      <button onClick={() => {
                              console.log("increaseAge Arrow Func");
                              setAge(++age);
                             }}>Increase Age</button>
    </div>
  );
}

export default Room;
