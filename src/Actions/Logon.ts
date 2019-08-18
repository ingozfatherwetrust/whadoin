import {Action} from "redux";

export enum AppIntroType {
    SignIn = 'SIGN_IN',
    SignUp
}
export interface SignInAction extends Action {
    type: AppIntroType.SignIn;
    userName: string;
    password: string;
}
export function signIn(userName: string, password: string): SignInAction {
    return {
        type: AppIntroType.SignIn,
        userName,
        password
    }
}