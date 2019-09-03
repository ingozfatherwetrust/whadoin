"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppIntroType;
(function (AppIntroType) {
    AppIntroType["SignIn"] = "SIGN_IN";
    AppIntroType["SignUp"] = "SIGN_UP";
    AppIntroType["SignUpSuccess"] = "SIGN_UP_SUCCESS";
    AppIntroType["SignUpFailed"] = "SIGN_UP_FAILED";
})(AppIntroType = exports.AppIntroType || (exports.AppIntroType = {}));
function signIn(email, password) {
    return {
        type: AppIntroType.SignIn,
        email: email,
        password: password
    };
}
exports.signIn = signIn;
function signUpRequest(email, firstName, lastName, phoneNumber, password) {
    return {
        type: AppIntroType.SignUp,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        password: password
    };
}
exports.signUpRequest = signUpRequest;
function signUpRequestSuccess(email, firstName, lastName, phoneNumber, password, refreshToken, uid) {
    return {
        type: AppIntroType.SignUpSuccess,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        password: password,
        refreshToken: refreshToken,
        uid: uid
    };
}
exports.signUpRequestSuccess = signUpRequestSuccess;
function SignUpRequestFailed(error) {
    return {
        type: AppIntroType.SignUpFailed,
        error: error
    };
}
exports.SignUpRequestFailed = SignUpRequestFailed;
