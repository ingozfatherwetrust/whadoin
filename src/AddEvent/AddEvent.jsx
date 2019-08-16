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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var AddEvent = /** @class */ (function (_super) {
    __extends(AddEvent, _super);
    function AddEvent(props) {
        var _this = _super.call(this, props) || this;
        _this.changeState = function () {
            _this.setState({ modalOpen: !_this.state.modalOpen });
        };
        _this.returnPicker = function () {
            if (!_this.state.modalOpen)
                return null;
            var items = ['Apple', 'Pear', 'Banana', 'Orange'];
            _this.setState({ pickerVal: items[0] });
            return (<react_native_1.View>
                <react_native_1.View style={styles.closeButtonContainer}>
                    <react_native_1.TouchableOpacity style={styles.closeButton}>
                        <react_native_1.Text style={styles.closeButtonText}>Choose</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                </react_native_1.View>
                <react_native_1.PickerIOS selectedValue={_this.state.pickerVal} onValueChange={function (itemValue) {
                _this.setState({ pickerVal: itemValue });
            }}>
                    {items.map(function (item, index) {
                return <react_native_1.PickerIOS.Item key={index} label={item} value={item}/>;
            })}
                </react_native_1.PickerIOS>
            </react_native_1.View>);
        };
        _this.state = {
            title: '',
            location: '',
            description: '',
            public: true,
            modalOpen: false,
            pickerVal: ''
        };
        return _this;
    }
    AddEvent.prototype.render = function () {
        return (<react_native_1.View style={styles.container}>
                <react_native_1.View style={styles.innerContainer}>
                    <react_native_1.View style={styles.interactionContainer}>
                        <react_native_1.TouchableOpacity style={__assign({}, styles.interactionButton, { justifyContent: 'center' })} onPress={this.props.onCancel}>
                            <react_native_1.Text>Cancel</react_native_1.Text>
                        </react_native_1.TouchableOpacity>

                        <react_native_1.View style={{ justifyContent: 'center' }}>
                            <react_native_1.Text>Event Post</react_native_1.Text>
                        </react_native_1.View>

                        <react_native_1.TouchableOpacity style={__assign({}, styles.interactionButton, { justifyContent: 'center' })} onPress={this.props.onSubmit}>
                            <react_native_1.Text>Post</react_native_1.Text>
                        </react_native_1.TouchableOpacity>

                    </react_native_1.View>
                    <react_native_1.TextInput placeholder='Event Title' placeholderTextColor='grey' style={styles.eventInput}/>
                    <react_native_1.TextInput placeholder='Event Location' placeholderTextColor='grey' style={styles.eventInput}/>
                    <react_native_1.View style={styles.textAreaContainer}>
                        <react_native_1.TextInput style={styles.textArea} underlineColorAndroid="transparent" placeholder="Event Description" placeholderTextColor="grey" numberOfLines={10} multiline={true}/>
                    </react_native_1.View>
                </react_native_1.View>
                {this.returnPicker()}
            </react_native_1.View>);
    };
    return AddEvent;
}(react_1.default.Component));
exports.default = AddEvent;
var styles = react_native_1.StyleSheet.create({
    eventInput: {
        height: 30,
        fontSize: 30,
        margin: 10,
        color: 'black'
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
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-between'
    },
    pickerBar: {
        flexDirection: 'row',
        height: 30,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-between'
    },
    interactionButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textAreaContainer: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        marginTop: 30,
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        flex: 1
    },
    closeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopColor: '#e2e2e2',
        borderTopWidth: 1,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1
    },
    closeButton: {
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    closeButtonText: {
        color: '#027afe'
    },
});
