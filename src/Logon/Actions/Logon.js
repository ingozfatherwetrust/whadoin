"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppIntroType;
(function (AppIntroType) {
    AppIntroType["SignIn"] = "SIGN_IN";
    AppIntroType["SignUp"] = "SIGN_UP";
    AppIntroType["SignUpFailed"] = "SIGN_UP_FAILED";
})(AppIntroType = exports.AppIntroType || (exports.AppIntroType = {}));
function signIn(userName, password) {
    return {
        type: AppIntroType.SignIn,
        userName: userName,
        password: password
    };
}
exports.signIn = signIn;
function signUpRequest(email, userName, phoneNumber, password) {
    return {
        type: AppIntroType.SignUp,
        email: email,
        userName: userName,
        phoneNumber: phoneNumber,
        password: password
    };
}
exports.signUpRequest = signUpRequest;
function SignUpRequestFailed(error) {
    return {
        type: AppIntroType.SignUpFailed,
        error: error
    };
}
exports.SignUpRequestFailed = SignUpRequestFailed;
