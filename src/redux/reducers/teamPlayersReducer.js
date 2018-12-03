const teamPlayersReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_PLAYERS_FOR_TEAM':
        return action.payload.data
        default: 
        return state;
    }
}

export default teamPlayersReducer;