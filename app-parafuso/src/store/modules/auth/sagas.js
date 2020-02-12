import { takeLatest, call, put, all } from 'redux-saga/effects';
import sessionApi from '../../../services/sessionApi';
import { signInSucess, signFailure } from './actions'
import history from '../../../services/history';

export function* signIn({ payload }) {
  try{
    const { name, password } = payload;

    const response = yield call(sessionApi.post, 'sessions', {
      name,
      password
    });
    const { token, consultant } =  response.data;

    sessionApi.defaults.headers.Authorization = `Barer ${token}`;

    yield put(signInSucess(token, consultant))

    history.push('/home')
  } catch (err){
    yield put(signFailure())
  }

}


export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token ){
    sessionApi.defaults.headers.Authorization = `Barer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut)
]);
