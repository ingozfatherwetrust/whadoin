import {Action} from "redux";

export enum AppIntroType {
    SignIn = 'SIGN_IN',
    SignUp = 'SIGN_UP',
    SignUpSuccess = 'SIGN_UP_SUCCESS',
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
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
}

export interface SignUpFailedResponseAction extends Action {
    type: AppIntroType.SignUpFailed;
    error: string
}
export interface SignUpSuccessResponseAction extends Action {
    type: AppIntroType.SignUpSuccess;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    refreshToken: string;
    uid: string
}
export function signIn(userName: string, password: string): SignInAction {
    return {
        type: AppIntroType.SignIn,
        userName,
        password
    }
}
export function signUpRequest(email: string, firstName: string, lastName: string, phoneNumber: string, password: string): SignUpRequestAction {
    return {
        type: AppIntroType.SignUp,
        email,
        firstName,
        lastName,
        phoneNumber,
        password
    }
}
export function signUpRequestSuccess(email: string, firstName: string, lastName: string, phoneNumber: string, password: string, refreshToken: string, uid: string): SignUpSuccessResponseAction {
    return {
        type: AppIntroType.SignUpSuccess,
        email,
        firstName,
        lastName,
        phoneNumber,
        password,
        refreshToken,
        uid
    }
}
export function SignUpRequestFailed(error: string): SignUpFailedResponseAction {
    return {
        type: AppIntroType.SignUpFailed,
        error
    }
}