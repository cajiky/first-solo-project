import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAllEventTypes(){
    const eventTypes = yield call(axios.get, '/api/events/types')
    yield put({type:'SET_EVENT_TYPES', payload: eventTypes});
}


function* eventsSaga(){
    yield takeEvery()
}

export default eventsSaga;