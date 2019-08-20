import { takeEvery } from 'redux-saga/effects'
import {AppIntroType} from "../Actions/Logon";

function* signIn(action) {
    yield alert(`signInSaga: ${JSON.stringify(action)}`)
}

export default function* signInMain() {
    yield takeEvery(AppIntroType.SignIn, signIn);
}