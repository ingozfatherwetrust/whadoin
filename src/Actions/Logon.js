"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppIntroType;
(function (AppIntroType) {
    AppIntroType["SignIn"] = "SIGN_IN";
    AppIntroType[AppIntroType["SignUp"] = void 0] = "SignUp";
})(AppIntroType = exports.AppIntroType || (exports.AppIntroType = {}));
function signIn(userName, password) {
    return {
        type: AppIntroType.SignIn,
        userName: userName,
        password: password
    };
}
exports.signIn = signIn;
