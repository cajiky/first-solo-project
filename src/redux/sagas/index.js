import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import playerProfileEditSaga from './PlayerProfileEditSaga';
import teamEditSaga from './TeamEditSaga';
import teamSaga from './TeamSaga';
import tacticsSaga from './CreateTacticSaga';
import playerInfoSaga from './playerInfoSaga';
import theGodSaga from './theGodSaga';
import eventsSaga from './EventsSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    playerProfileEditSaga(),
    teamEditSaga(),
    teamSaga(),
    tacticsSaga(),
    playerInfoSaga(),
    theGodSaga(),
    eventsSaga(),
    
  ]);
}
