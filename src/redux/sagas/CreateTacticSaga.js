import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getMapsSaga(){
    const maps = yield call(axios.get, '/api/tactics/maps')
    yield put({type:'GET_MAPS_REDUCER', payload: maps})
}

//SAGA in charge of submiting a new tactic >server>db 
function* submitNewTacticSaga(action){
    yield call(axios.post, '/api/tactics', action.payload)
}

//SAGA in charge of getting a particular teams tactics.
function* getTeamsTacticsSaga(action){
    // const teamsTactics = yield call(axios.get, '/api/tactics/private', action.payload);
}



//Main function to export to our main watcher saga
function* tacticsSaga(){
    yield takeEvery('GET_MAPS_SAGA', getMapsSaga);
    yield takeEvery('SUBMIT_NEW_TACTIC_SAGA', submitNewTacticSaga);
    yield takeEvery('GET_TEAMS_TACTICS_SAGA', getTeamsTacticsSaga);
}

export default tacticsSaga;