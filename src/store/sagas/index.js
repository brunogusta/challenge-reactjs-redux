import { all, takeLatest } from 'redux-saga/effects';

import { addUserSaga } from './addUser';

import { Types as userTypes } from '../duck/addUser';

export default function* rootSaga() {
  yield all([takeLatest(userTypes.ADD_REQUEST, addUserSaga)]);
}
