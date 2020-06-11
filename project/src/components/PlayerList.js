import React, { useEffect } from 'react';
import PlayerCard from './PlayerCard';

import { connect } from 'react-redux';
import { fetchPlayers } from '../actions/actions';

const PlayerList = (props) =>{

    useEffect(() =>{
        props.fetchPlayers()}, [])

    return(
    <div>
        <h1>Player List</h1>
        <ol>
            <li><PlayerCard /></li>
        </ol>
    </div>
        
    )
const mapStateToProps = (state) =>{
    return {
        players: state.players,
        isFetching:state.isFetching,
        error: state.error
    }




}

}

export default connect {
    mapStateToProps,
    { fetchPlayers }
}(PlayerList)