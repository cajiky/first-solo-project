const eventsPageReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EVENT_TYPES':
        return action.payload;
      default:
        return state;
    }
  };

  export default eventsPageReducer;