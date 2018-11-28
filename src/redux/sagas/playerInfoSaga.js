import axios from 'axios';
import {call, put, takeEvery } from 'redux-saga/effects';

//Saga in charge of reaching out and getting all of the relivent user data that we'll need while the user is on the app.
function* getUserDataSaga(){
   const userData = yield call(axios.get, '/api/players');
                    yield put({type:'SET_USER_DATA', payload: userData});

}

function* playerInfoSaga(){
    yield takeEvery('GET_USER_DATA_SAGA', getUserDataSaga)
}

export default playerInfoSaga;