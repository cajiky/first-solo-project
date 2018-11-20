import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
//
//SAGA IN CHARGE OF GOIN AND GRABBING DATA FROM THE ROLES TABLE AND SENDING IT TO THE REDUX STATE.
function* getRolesSaga(action) {
    console.log('in getRolesSaga');
    try{
        const response = yield call(axios.get, '/api/roles/')
        yield put({type:'SEND_ROLES_TO_REDUCER', payload: response.data});
    }
    catch(error){
        console.log('error in our getRolesSaga');
    }
}

function* playerProfileEditSaga(){
    yield takeEvery('GET_ROLES', getRolesSaga);
}

export default playerProfileEditSaga;
