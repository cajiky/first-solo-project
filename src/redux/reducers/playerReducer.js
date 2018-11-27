const playerReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        return action.payload.data[0];
      default:
        return state;
    }
  };

  export default playerReducer;