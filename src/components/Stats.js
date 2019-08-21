import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {

    const totalPlayers = props.players.length; 
    const totalPoints = props.players.reduce( (total, player) => {
        return total + player.score;
    }, 0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                <td>Players:</td>
                <td>{ totalPlayers }</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    // players: PropTypes.arrayOf(PropTypes.shape({
    // score: PropTypes.number
    // }))

    players: PropTypes.arrayOf(PropTypes.object)
};
// This method of propTypes is used to be more specific with the data
//  type being passed to Stats. It is also not required. 
// **Just shown as example from video**

export default Stats;