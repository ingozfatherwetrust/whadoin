import signInMain from "../Logon/Sagas/LogonSaga";
import {all} from 'redux-saga/effects';

export default function * main() {
    const sagas = [
        signInMain()
    ];
    yield all(sagas)
}