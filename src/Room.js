import React, {useState} from 'react';

function Room() {
  // const state = React.useState(true);
  // const isLit = state[0];
  // const setLit = state[1];
  // console.log("State = ", state);

  const [isLit, setLit] = React.useState(true);

  return (
    <div>
      This Room is {isLit ? 'Lit' : 'Dark'}
    </div>
  );
}

export default Room;
