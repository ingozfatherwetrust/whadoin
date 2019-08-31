import { takeEvery } from 'redux-saga/effects'
import {AppIntroType, SignUpAction} from "../Actions/Logon";
import firebase from "react-native-firebase";

function* logonSaga(action) {
    yield alert(`signInSaga: ${JSON.stringify(action)}`)
}

function* signUp(action: SignUpAction) {
    yield firebase.auth().createUserWithEmailAndPassword(action.email, action.password)
        .then((user) => {
            alert('worked')
            console.log('user', user);
            debugger;
        }).catch((err) => {
            alert('didn\'t work');
            console.log('error', err);
            debugger;
        })
}

export default function* signInMain() {
    debugger;
    yield takeEvery(AppIntroType.SignIn, logonSaga);
    yield takeEvery(AppIntroType.SignUp, signUp)
}