const playerReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        console.log('inside of our console.log in "playerReducer"',action.payload);
        return action.payload.data[0];
      default:
        return state;
    }
  };

  export default playerReducer;