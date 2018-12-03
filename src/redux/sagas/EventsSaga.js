import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

function* getAllEventTypes(){
    const eventTypes = yield call(axios.get, '/api/events/type')
    yield put({type:'SET_EVENT_TYPES', payload: eventTypes.data});
}

function* submitEvent(action){
    yield call(axios.post, '/api/events/', action.payload);
}

function* getEventsFor(){
   const events = yield call(axios.get, '/api/events/')
   yield put({type:'SET_EVENTS_FOR', payload: events.data})
}

function* eventsSaga(){
    yield takeEvery('GET_EVENT_TYPES', getAllEventTypes);
    yield takeEvery('SUBMIT_EVENT', submitEvent);
    yield takeEvery('GET_TEAMS_EVENTS_SAGA', getEventsFor);
}

export default eventsSaga;