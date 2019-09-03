import { takeEvery, call, put} from 'redux-saga/effects'
import {AppIntroType, SignUpFailedResponseAction, SignUpRequestAction, SignUpRequestFailed} from "../Actions/Logon";
import firebase from "react-native-firebase";
import NavigationService from "../../../NavigationService";

function* logonSaga(action) {
    yield alert(`signInSaga: ${JSON.stringify(action)}`)
}

function* firebaseAuthorizeSignUp(action: SignUpRequestAction) {
    try {
        const auth = firebase.auth();
        const result = yield call(
            [auth, auth.createUserWithEmailAndPassword],
            action.email,
            action.password
        );
        NavigationService.navigate('DashboardPage');
        // this.props.navigation.navigate('DashboardPage');
        alert('worked')
        console.log('user', result);
        debugger;
        // ToDo: Only navigate at the end of the success sequence
    } catch(err) {
        // ToDo: add error mapping like I have listed below
        // const error_message = { code: err.code, message: err.message };
        yield put(SignUpRequestFailed(err.message));
        debugger;
    }
}

function* signUp(action: SignUpRequestAction) {
    yield call(firebaseAuthorizeSignUp, action);
    debugger;
}

export default function* signInMain() {
    yield takeEvery(AppIntroType.SignIn, logonSaga);
    yield takeEvery(AppIntroType.SignUp, signUp)
}