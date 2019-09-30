import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { cpf } = payload;
    const response = yield call(api.post, 'sessions', {
      cpf,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Failed authentication');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, cpf, phone } = payload;

    yield call(api.post, 'users', {
      name,
      cpf,
      phone,
    });

    toast.success('Account created with success');

    history.push('/');
  } catch (error) {
    toast.error(`Failed at create your account, ${error}`);
    yield put(signFailure());
  }
}

export function* getAccount() {
  try {
    yield call(api.get, 'users');

    toast.success('Account created with success');

    history.push('/');
  } catch (error) {
    toast.error(`Failed at create your account, ${error}`);
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
