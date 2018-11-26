const teamOwnerReducer = (state=null, action) => {
    switch(action.type){
        case 'SET_TEAM_OWNER_STATUS':
        return action.payload.data
        default: 
        return state;
    }
}

export default teamOwnerReducer;