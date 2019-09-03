import { takeEvery, call, put, take} from 'redux-saga/effects'
import {
    AppIntroType,
    SignUpFailedResponseAction,
    SignUpRequestAction,
    SignUpRequestFailed,
    signUpRequestSuccess
} from "../Actions/Logon";
import firebase from "react-native-firebase";
import NavigationService from "../../../NavigationService";
import { Alert } from 'react-native';

function* logonSaga(action) {
    yield alert(`signInSaga: ${JSON.stringify(action)}`)
}

function* firebaseAuthorizeSignUp(action: SignUpRequestAction) {
    try {
        const {email, firstName, lastName, password, phoneNumber} = action;
        const auth = firebase.auth();
        const result = yield call(
            [auth, auth.createUserWithEmailAndPassword],
            action.email,
            action.password,
        );
        const {refreshToken, uid} = result.user._user;
        yield put(signUpRequestSuccess(email, firstName, lastName, phoneNumber, password, refreshToken, uid));
        NavigationService.navigate('DashboardPage');
        console.log(result);
    } catch(err) {
        // ToDo: add error mapping like I have listed below
        // const error_message = { code: err.code, message: err.message };
        // yield put(SignUpRequestFailed(err.message));
        // yield take(AppIntroType.SignUpFailed)
        yield call(signUpFailed, err.message)
    }
}
function * signUpFailed(message: string) {
    Alert.alert(
        'Unable to Sign Up',
        message,
        [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
    )
}

function* signUp(action: SignUpRequestAction) {
    yield call(firebaseAuthorizeSignUp, action);
}

export default function* signInMain() {
    yield takeEvery(AppIntroType.SignIn, logonSaga);
    yield takeEvery(AppIntroType.SignUp, signUp)
}