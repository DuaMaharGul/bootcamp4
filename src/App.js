import React from 'react';
//import room from './Room.js';
import './logo.svg';
import './App.css';


function Room() {

  let [isLit, setLit] = React.useState(false);
 // function updateLit() {
 //   console.log("Button Clicked"); removed bcuz single line code no {}
 //   setLit(!isLit);}

  let [age, setAge] = React.useState(20);
  // turned into arrow function


  return (
    <div>
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
