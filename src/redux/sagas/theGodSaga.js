import {call, put, takeEvery } from 'redux-saga/effects';

function* getAllDataSaga(){
    yield put({type:'GET_MAPS_SAGA'})
    yield put({type:'GET_ROLES'})
    yield put({type:'GET_ROLES'})
    yield put({type:'SUBMIT_NEW_EDIT_SAGA'})
    yield put({type:'GET_TEAM_INFO_SAGA'})
}

function* theGodSaga(){
    yield takeEvery('GET_ALL_DATA', getAllDataSaga)
}

export default theGodSaga;