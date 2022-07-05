import { useState } from 'react';

function App() {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const choices = ['rock', 'paper' ,'scissors', 'lizard' , 'spock']
  const  handleClick = (value) => {
    setUserChoice(value)
  }


  return (
    <div >
      <h1> user Choice is: {userChoice} </h1>
      <h1>computer Choice is:</h1>
      {/* <button onClick={ () => handleClick('rock')}>Rock</button>
      <button onClick={ () => handleClick('paper')}>Paper</button>
      <button onClick={ () => handleClick('scissors')}>Scissors</button>
      <button onClick={ () => handleClick('lizard')}>Lizard</button>
      <button onClick={ () => handleClick('spock')}>Spock</button> */}
      {choices.map(choice => <button onClick={ () => handleClick(choice)}>{choice}</button>)}
    </div>
  );
}

export default App;
