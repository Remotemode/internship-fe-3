import { takeEvery, select, call, put } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import * as firebaseAuthMethods from '../../firebase/authorizationMethods';
import * as selectors from './selectors';
import * as actions from './actions';

export default function* firebaseAuthSagaWatcher() {
    yield takeEvery(actionTypes.SIGN_IN_WITH_GOOGLE, singIn);
    yield takeEvery(actionTypes.SIGN_OUT, singOut);
}

export function* singIn() {
    const userId = yield select(selectors.getUserId);

    if (!!userId) {
        return
    }

    try {
        const { uid, docId } = yield call(firebaseAuthMethods.getFirebaseSignInRequest); //here is initialize an isAdmin field

        yield put(actions.setAuthUserStore(uid));
        yield put(actions.setAuthUserDatabaseIdStore(docId));
        yield put(actions.setDataToLocalStorage({ fieldType: 'authData', data: { uid, docId } }));
    } catch (error) {
        console.error('error', error)
    }
}

export function* singOut() {
    const docId = yield select(selectors.getDocId);

    try {
        yield call(firebaseAuthMethods.firebaseSignOut, docId);
        yield put(actions.setAuthUserStore(''));
        yield put(actions.removeDataFromLocalStorage());
    } catch(error) {
        console.error('error', error)
    }
}
