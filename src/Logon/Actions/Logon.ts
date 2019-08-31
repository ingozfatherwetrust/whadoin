import {Action} from "redux";

export enum AppIntroType {
    SignIn = 'SIGN_IN',
    SignUp = 'SIGN_UP'
}
export interface SignInAction extends Action {
    type: AppIntroType.SignIn;
    userName: string;
    password: string;
}
export interface SignUpAction extends Action {
    type: AppIntroType.SignUp;
    email: string;
    userName: string;
    phoneNumber: string;
    password: string;
}
export function signIn(userName: string, password: string): SignInAction {
    return {
        type: AppIntroType.SignIn,
        userName,
        password
    }
}
export function signUp(email: string, userName: string, phoneNumber: string, password: string): SignUpAction {
    return {
        type: AppIntroType.SignUp,
        email,
        userName,
        phoneNumber,
        password
    }
}