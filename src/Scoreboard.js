import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
     score: 0,
  });

  // nrmlm kol mancliquiw ela button + hedi tzid 
  function handlePlusClick() {
    const newPerson = {...player}
    newPerson.score++ ;  
    setPlayer(newPerson)
    console.log(newPerson.score)
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
        ...player , 
      lastName: e.target.value
    });
  }

  return (
    <>
      <label>
     Score: {player.score}
        {' '}
         
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}