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

Header.propTypes = {
  players: PropTypes.string,
  title: PropTypes.arrayOf(PropTypes.object)
};
// arrayOf Method checks if an array of Objects is being passed to it.

export default Header;