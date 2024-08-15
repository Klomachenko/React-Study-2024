import React, { Component } from 'react';
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

class App extends Component {
  state = {
    userSelect: null,
    computerSelect: null,
    result: '',
  };

  play = (userChoice) => {
    const userSelect = choice[userChoice];
    const computerSelect = this.randomChoice();
    const result = this.judgement(userSelect, computerSelect);

    this.setState({
      userSelect,
      computerSelect,
      result,
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock') {
      return computer.name === 'Scissors' ? 'win' : 'lose';
    } else if (user.name === 'Scissors') {
      return computer.name === 'Paper' ? 'win' : 'lose';
    } else if (user.name === 'Paper') {
      return computer.name === 'Rock' ? 'win' : 'lose';
    }
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    return (
      <div>
        <div className='main'>
          <Box
            title='you'
            item={this.state.userSelect}
            result={this.state.result}
          />
          <Box
            title='computer'
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>

        <div className='main'>
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('paper')}>보</button>
        </div>
      </div>
    );
  }
}

export default App;
