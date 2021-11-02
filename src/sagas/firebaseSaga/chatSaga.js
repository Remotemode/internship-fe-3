import { all, call, takeEvery } from 'redux-saga/effects';
import * as chatMethods from '../../firebase/chatMethods'
import actionTypes from '../../constants/actionTypes';

export default function* watchChatSaga() {
    yield all([
        takeEvery(actionTypes.SEND_MESSAGE, sendMessages),
    ]);
};

export function* sendMessages({ payload }) {
    yield call(chatMethods.sendMessageRequest, payload);
}
