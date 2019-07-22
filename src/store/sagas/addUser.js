import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as addUserActions } from '../duck/addUser';

export function* addUserSaga(action) {
  try {
    const { data } = yield call(api.get, `${action.payload.user}`);

    const userData = {
      id: data.id,
      login: data.login,
      avatarURL: data.avatar_url,
      name: data.name
    };

    yield put(addUserActions.addAvatarToMapSuccess(userData));
  } catch (err) {
    console.log(err);
  }
}
