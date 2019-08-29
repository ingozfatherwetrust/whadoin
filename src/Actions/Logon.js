"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppIntroType;
(function (AppIntroType) {
    AppIntroType["SignIn"] = "SIGN_IN";
    AppIntroType["SignUp"] = "SIGN_UP";
})(AppIntroType = exports.AppIntroType || (exports.AppIntroType = {}));
function signIn(userName, password) {
    return {
        type: AppIntroType.SignIn,
        userName: userName,
        password: password
    };
}
exports.signIn = signIn;
function signUp(email, userName, phoneNumber, password) {
    return {
        type: AppIntroType.SignUp,
        email: email,
        userName: userName,
        phoneNumber: phoneNumber,
        password: password
    };
}
exports.signUp = signUp;
