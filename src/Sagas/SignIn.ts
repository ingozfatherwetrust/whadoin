import { takeEvery } from 'redux-saga/effects'
import {AppIntroType, SignUpAction} from "../Actions/Logon";
import firebase from "react-native-firebase";

function* signIn(action) {
    yield alert(`signInSaga: ${JSON.stringify(action)}`)
}

function* signUp(action: SignUpAction) {
    yield firebase.auth().createUserWithEmailAndPassword(action.email, action.password)
        .then((user) => {
            console.log(user);
            console.log('uid', user.user._user.uid);
            debugger;
        }).catch((err) => {
            console.log(err);
            debugger;
        })
}

export default function* signInMain() {
    yield takeEvery(AppIntroType.SignIn, signIn);
    yield takeEvery(AppIntroType.SignUp, signUp)
}