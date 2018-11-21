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

//SAGA THAT WILL TAKE DATA FROM OUR DISPATCH AND SEND THEM TO THE SERVERSIDE TO BE USED IN AN UPDATE REQ TO THE DB
function* submitEditSaga(action) {
    console.log('inside submitEditSaga');
    try{
        yield call(axios.put, '/api/editPlayer/', action.payload)
    }
    catch(error){
        console.log('error in our submitEditSaga', error);
    }
}

function* playerProfileEditSaga(){
    yield takeEvery('GET_ROLES', getRolesSaga);
    yield takeEvery('SUBMIT_NEW_EDIT_SAGA', submitEditSaga);
}

export default playerProfileEditSaga;
