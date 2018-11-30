import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import setRolesReducer from './PlayerProfileEditReducer';
import userPlayerReducer from './userPlayerProfileReducer';
import teamReducer from './teamReducer';
import teamOwnerReducer from './teamOwnerReducer';
import mapsReducer from './mapsReducer';
import playerReducer from './playerReducer';
import teamsTacticsReducer from './teamsTacticsReducer';
import eventPageReducer from './eventsPageReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  setRolesReducer, //will be receving roles from the data base.
  userPlayerReducer, //will take in and manage all of the properties from the logged in users state
  teamReducer, //Will take all the data for a particular team that the user owns/is a part of
  teamOwnerReducer, //Will get called when the server has checked to see if the current user is a team owner and will take that data for the conditional render on the TeamProfilePage.
  mapsReducer,//Will be used to store maps and tactics 
  playerReducer, //Will be used to store the user/players information.
  teamsTacticsReducer, //Will store the user's teams tactics for the tactics page
  eventPageReducer, //Will store event types 
});

export default rootReducer;
