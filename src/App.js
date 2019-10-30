import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import monsters from "./monsters.json";
import Navbar from './components/Navbar'


class App extends Component {
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      monsters,
      score: 0,
      highscore: 0,
      clicked: [],
      message: '',
      options: ['Good one', 'Nice pick', 'Safe!', 'You Win!', 'Oops, already clicked, try again']
    };
  }
  handleClick = (id) => {
    let clicked = this.state.clicked;
    console.log(clicked)
    console.log(id)
    if (clicked.includes(id)) {
      this.setState({ 
        clicked: [], 
        score: 0,
        message: this.state.options[4]
      });
      return;
    } else {
      clicked.push(id)
      this.setState({
        score: this.state.score +1,
        message: this.state.options[(Math.floor(Math.random()*3))]
      })
      if(clicked.length === 8){
        this.setState({
          score: 0, 
          highscore: 8,
          clicked: [],
          message: this.state.options[3]
        });
        return;
      }
      if (this.state.score >= this.state.highscore) {
        this.setState({highscore: clicked.length});
      }
      for (let i = monsters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        const temp = monsters[i];
        monsters[i] = monsters[j];
        monsters[j] = temp;
      }
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <h1>Monster Guess</h1>
        <h4>Click a monster only once to win</h4>
        <h4>Score: {this.state.score} Highscore: {this.state.highscore}</h4>
        <Message message={this.state.message}/>
        <CardList monsters={this.state.monsters} click={this.handleClick}/>
      </div>
    );
  }
}


const Message = (props) => {
    if (props.message === 'Oops, already clicked, try again') {
      return (
        <div>
        {props.message && <p className="alert alert-danger" role="alert">{props.message}</p>}
        </div>
      )
    } else {
      return (
        <div>
        {props.message && <p className="alert alert-success" role="alert">{props.message}</p>}
        </div>
      )
    }
}
export default App;