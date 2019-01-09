"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var AddEvent = /** @class */ (function (_super) {
    __extends(AddEvent, _super);
    function AddEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddEvent.prototype.render = function () {
        return (<react_native_1.ScrollView style={styles.container}>
                <react_native_1.View style={styles.innerContainer}>
                    <react_native_1.View>
                        <react_native_1.Text style={styles.addEventText}>Add Event</react_native_1.Text>
                        <react_native_1.TextInput placeholder='Event Title' placeholderTextColor='grey' style={styles.eventInput}/>
                        <react_native_1.TextInput placeholder='Event Location' placeholderTextColor='grey' style={styles.eventInput}/>
                    </react_native_1.View>
                    <react_native_1.View style={styles.textAreaContainer}>
                        <react_native_1.TextInput style={styles.textArea} underlineColorAndroid="transparent" placeholder="Event Description" placeholderTextColor="grey" numberOfLines={10} multiline={true}/>
                    </react_native_1.View>
                </react_native_1.View>
                <react_native_1.View>
                    <react_native_1.View style={styles.interactionContainer}>
                        <react_native_1.TouchableOpacity style={styles.interactionButton}>
                            <react_native_1.Text>Submit</react_native_1.Text>
                        </react_native_1.TouchableOpacity>
                        <react_native_1.TouchableOpacity style={styles.interactionButton} onPress={this.props.onCancel}>
                            <react_native_1.Text>Cancel</react_native_1.Text>
                        </react_native_1.TouchableOpacity>
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_1.ScrollView>);
    };
    return AddEvent;
}(react_1.default.Component));
exports.default = AddEvent;
var styles = react_native_1.StyleSheet.create({
    eventInput: {
        borderBottomWidth: .5,
        borderBottomColor: 'black',
        flex: 1,
        height: 40,
        fontSize: 20,
        margin: 10,
        color: 'grey'
    },
    container: {
        flex: 1,
        marginTop: 22
    },
    innerContainer: {
        flex: 1
    },
    addEventText: {
        fontSize: 50,
    },
    interactionContainer: {
        flexDirection: 'row',
        height: 30,
        marginTop: 10
    },
    interactionButton: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: 'white',
        borderRightWidth: .5
    },
    textAreaContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        marginTop: 30
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        flex: 1
    },
});
