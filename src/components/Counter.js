import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, score, changeScore }) => {

  // Commented out due to desctructuring assignment
  // Use 'this.' if not commented out.
  //   let index = props.index;
  
    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
          <span className="counter-score">{ score }</span>
          <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
        </div>
    );
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

export default Counter;