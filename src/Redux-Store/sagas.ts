import signInMain from "../Sagas/SignIn";
import {all} from 'redux-saga/effects';

export default function * main() {
    const sagas = [
        signInMain()
    ];
    yield all(sagas)
}