"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    labels: {
        color: 'white',
    },
    input: {
        width: 200,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 20
    },
    button: {
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    bottomText: {
        color: 'white',
        fontSize: 14,
    },
    bottomButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginTop: 15
    },
});
exports.default = styles;
