import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://static.wikia.nocookie.net/sonsoftheforest_gamepedia_en/images/f/fe/RockThumb.png/revision/latest?cb=20230516015144',
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
  const play = (userChoice) => {
    console.log('선택됨', userChoice);
  };

  return (
    <div>
      <div className='main'>
        <Box title='you' />
        <Box title='computer' />
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
