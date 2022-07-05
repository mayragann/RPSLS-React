import { useEffect, useState } from 'react';

function App() {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['rock', 'paper' ,'scissors', 'lizard' , 'spock']
  
  const  handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }
  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }
  useEffect(() => {
    checkResult()
    switch( userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors' :
      case 'paperrock':
      case 'rocklizard':
      case 'lizardspock':
      case 'spockscissors':
      case 'scissorslizard':
      case 'lizardpaper':
      case 'paperspock':
      case 'spockrock':
        setResult('YOU WIN!!')
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
      case 'lizardrock':
      case 'spocklizard':
      case 'scissorsspock':
      case 'lizardsscissors':
      case 'paperlizard':
      case 'spockpaper':
      case 'rockspock':
        setResult('YOU LOSE!!')
        break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
        case 'lizardlizard':
        case 'spockspock':
          setResult('IT IS A DRAW')
          break
    }
  }, [computerChoice, userChoice])

  const checkResult = () => {
   
  }

  return (
    <div >
      <h1> user Choice is: {userChoice} </h1>
      <h1>computer Choice is: {computerChoice}</h1>
      {choices.map((choice) => <button key={choice} onClick={ () => handleClick(choice)}>{choice}</button>)}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
