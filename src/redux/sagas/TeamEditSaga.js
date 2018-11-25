import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* submitTeamSaga(action) {
    console.log('in submitTeamSaga');
    try{
         yield call(axios.post, '/api/teams/', action.payload);
    }
    catch(error){
        console.log('error in our getRolesSaga');
    }
}

function* getTeamInfoSaga(action) {
    console.log('in getTeamInfoSaga');
    try{
        const response = yield call(axios.get, '/api/teams')
        yield put({type: 'SET_TEAM_INFO_REDUCER'});
    }
    catch(error){
        console.log('error in our getTeamInfoSaga');
    }
}

//Main function to export to our main watcher saga
function* teamEditSaga(){
    yield takeEvery('SUBMIT_TEAM_SAGA', submitTeamSaga);
    yield takeEvery('GET_TEAM_INFO_SAGA', getTeamInfoSaga);
}

export default teamEditSaga;