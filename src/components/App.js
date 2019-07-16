import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';



class App extends Component {
  state = {
    players: [
      {
        name: "Stefan",
        score: 0,
        id: 1
      },
      {
        name: "Jess",
        score: 0,
        id: 2
      },
      {
        name: "Indie",
        score: 0,
        id: 3
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    console.log('index: ' + index, 'delta: ' + delta);
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        <AddPlayerForm />
      </div>
    );
  }
}

export default App;
