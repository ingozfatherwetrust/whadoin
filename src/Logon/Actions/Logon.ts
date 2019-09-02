import {Action} from "redux";

export enum AppIntroType {
    SignIn = 'SIGN_IN',
    SignUp = 'SIGN_UP',
    SignUpFailed = 'SIGN_UP_FAILED'
}
export interface SignInAction extends Action {
    type: AppIntroType.SignIn;
    userName: string;
    password: string;
}
export interface SignUpRequestAction extends Action {
    type: AppIntroType.SignUp;
    email: string;
    userName: string;
    phoneNumber: string;
    password: string;
}

export interface SignUpFailedResponseAction extends Action {
    type: AppIntroType.SignUpFailed;
    error: string
}
export function signIn(userName: string, password: string): SignInAction {
    return {
        type: AppIntroType.SignIn,
        userName,
        password
    }
}
export function signUpRequest(email: string, userName: string, phoneNumber: string, password: string): SignUpRequestAction {
    return {
        type: AppIntroType.SignUp,
        email,
        userName,
        phoneNumber,
        password
    }
}
export function SignUpRequestFailed(error: string): SignUpFailedResponseAction {
    return {
        type: AppIntroType.SignUpFailed,
        error
    }
}