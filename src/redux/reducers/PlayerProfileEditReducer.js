const editPlayerReducer = (state = [], action) => {
    switch (action.type) {
      case 'SEND_ROLES_TO_REDUCER':
        return action.payload;
      default:
        return state;
    }
  };

  export default editPlayerReducer;