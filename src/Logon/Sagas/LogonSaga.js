"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = require("redux-saga/effects");
var Logon_1 = require("../Actions/Logon");
var react_native_firebase_1 = require("react-native-firebase");
var NavigationService_1 = require("../../../NavigationService");
var react_native_1 = require("react-native");
function logonSaga(action) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, alert("signInSaga: " + JSON.stringify(action))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function firebaseAuthorizeSignUp(action) {
    var email, firstName, lastName, password, phoneNumber, auth, result, _a, refreshToken, uid, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 5]);
                email = action.email, firstName = action.firstName, lastName = action.lastName, password = action.password, phoneNumber = action.phoneNumber;
                auth = react_native_firebase_1.default.auth();
                return [4 /*yield*/, effects_1.call([auth, auth.createUserWithEmailAndPassword], action.email, action.password)];
            case 1:
                result = _b.sent();
                _a = result.user._user, refreshToken = _a.refreshToken, uid = _a.uid;
                return [4 /*yield*/, effects_1.put(Logon_1.signUpRequestSuccess(email, firstName, lastName, phoneNumber, password, refreshToken, uid))];
            case 2:
                _b.sent();
                NavigationService_1.default.navigate('DashboardPage');
                console.log(result);
                return [3 /*break*/, 5];
            case 3:
                err_1 = _b.sent();
                // ToDo: add error mapping like I have listed below
                // const error_message = { code: err.code, message: err.message };
                // yield put(SignUpRequestFailed(err.message));
                // yield take(AppIntroType.SignUpFailed)
                return [4 /*yield*/, effects_1.call(signUpFailed, err_1.message)];
            case 4:
                // ToDo: add error mapping like I have listed below
                // const error_message = { code: err.code, message: err.message };
                // yield put(SignUpRequestFailed(err.message));
                // yield take(AppIntroType.SignUpFailed)
                _b.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function signUpFailed(message) {
    return __generator(this, function (_a) {
        react_native_1.Alert.alert('Unable to Sign Up', message, [
            { text: 'OK', onPress: function () { return console.log('OK Pressed'); } },
        ]);
        return [2 /*return*/];
    });
}
function signUp(action) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.call(firebaseAuthorizeSignUp, action)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function signInMain() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(Logon_1.AppIntroType.SignIn, logonSaga)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(Logon_1.AppIntroType.SignUp, signUp)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = signInMain;
