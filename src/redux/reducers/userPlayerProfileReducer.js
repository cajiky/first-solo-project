const userPlayerReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_INIT_STATE':
        return action.payload[0];
        default: 
        return state;
    }
}

export default userPlayerReducer;