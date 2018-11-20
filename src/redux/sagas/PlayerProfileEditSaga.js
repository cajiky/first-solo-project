import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRolesSaga(action) {
    console.log('in getRolesSaga');
    try{
        const response = yield call(axios.get, '/api/roles/')
        console.log(response ,'< our response back from the server on /api/roles');
    }
    catch(error){
        console.log('error in our getRolesSaga');
    }
}

function* playerProfileEditSaga(){
    yield takeEvery('GET_ROLES', getRolesSaga);
}

export default playerProfileEditSaga;
