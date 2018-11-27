const mapsReducer = (state=[], action) => {
    switch(action.type){
        case 'GET_MAPS_REDUCER':
        return action.payload.data
        default: 
        return state;
    }
}

export default mapsReducer;