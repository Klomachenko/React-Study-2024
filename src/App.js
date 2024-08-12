import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://assets.katogroup.eu/i/katogroup/VT8-0919-24_02_victorinox',
  },
  paper: {
    name: 'Paper',
    img: 'https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <div>
      <div className='main'>
        <Box title='you' item={userSelect} />
        <Box title='computer' item={computerSelect} />
      </div>

      <div className='main'>
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
