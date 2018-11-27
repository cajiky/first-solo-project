const teamsTacticsReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_TEAMS_TACTIC_REDUCER':
        return action.payload.data
        default: 
        return state;
    }
}

export default teamsTacticsReducer;