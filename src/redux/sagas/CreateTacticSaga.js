import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getMapsSaga(){
    const maps = yield call(axios.get, '/api/tactics/maps')
    yield put({type:'GET_MAPS_REDUCER', payload: maps})
}



//Main function to export to our main watcher saga
function* createTacticSaga(){
    yield takeEvery('GET_MAPS_SAGA', getMapsSaga);

}

export default createTacticSaga;