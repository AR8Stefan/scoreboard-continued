import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
    return (
      <header>
        <Stats players={players} />
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
}
// arrayOf Method checks if an array of Objects is being passed to it.
Header.propTypes = {
  players: PropTypes.string,
  title: PropTypes.arrayOf(PropTypes.object)
};

// defaultProps is passing a default string of "Scoreboard" if 
// not specified by the parent app component. 
// It also is type checked in Header.propTypes (Above).
Header.defaultProps = {
  title: "Scoreboard"
}

export default Header;