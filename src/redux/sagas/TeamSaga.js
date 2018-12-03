import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//Called when a component needs to get the team information for a particular user/owner
function* getTeamSaga(){
   const team = yield call(axios.get, '/api/teams')
   yield put({type: 'SET_TEAM_DATA', payload: team.data})
}

//Called when the Team Profile Page needs to see if the logged in user is a team owner or if they are just a team member.
function* checkTeamOwnerSaga(){
    const isTeamOwner = yield call(axios.get, '/api/teams/teamOwner');
    yield put({type: 'SET_TEAM_OWNER_STATUS', payload: isTeamOwner});
}

function* getAllPlayersFor(){
    const team = yield call(axios.get, '/api/teams/players');
    yield put({type: 'SET_PLAYERS_FOR_TEAM', payload: team});
}



//Main function to export to our main watcher saga
function* teamEditSaga(){
    yield takeEvery('GET_TEAM_DATA_SAGA', getTeamSaga);
    yield takeEvery('CHECK_TEAM_OWNER_SAGA', checkTeamOwnerSaga);
    yield takeEvery('GET_ALL_PLAYERS_FOR_TEAM', getAllPlayersFor)
}

export default teamEditSaga; 