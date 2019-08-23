import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class Player extends PureComponent {

  // isRequired is telling React that a name and score are required for the application.
  static PropTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func,
  }

  render() {
    console.log(this.props.name + ' rendered');

    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}> ✖ </button>
          { name }
        </span>
  
        <Counter 
            score={score} 
            index={index}
            changeScore={changeScore}
        />
      </div>
    );
  }

}

export default Player;