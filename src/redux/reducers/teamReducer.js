const teamReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_TEAM_DATA':
        return action.payload[0];
        case 'SET_TEAM_OWNER_STATUS':
        console.log(action.payload.data);
        default: 
        return state;
    }
}

export default teamReducer;