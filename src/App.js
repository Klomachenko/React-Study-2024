import './App.css';
import Box from './component/Box';

function App() {
  return (
    <div>
      <div className='main'>
        <Box title='you' />
        <Box title='computer' />
      </div>

      <div className='main'>
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
