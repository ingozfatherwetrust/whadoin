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
var EventItem = /** @class */ (function (_super) {
    __extends(EventItem, _super);
    function EventItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventItem.prototype.render = function () {
        return (<react_native_1.View style={styles.eventContainer}>
                <react_native_1.View style={styles.eventHeader}>
                    <react_native_1.Image source={require('../../assets/genericBatman.jpeg')} style={styles.eventProfilePic}/>
                    <react_native_1.View>
                        <react_native_1.Text style={styles.eventPosterName}>{this.props.userName}</react_native_1.Text>
                        <react_native_1.Text style={styles.timePosted}>3 hrs ago</react_native_1.Text>
                        <react_native_1.Text style={styles.timePosted}>10106 Dorchester Ct. Clarkston, MI</react_native_1.Text>
                    </react_native_1.View>

                </react_native_1.View>
                <react_native_1.Text style={styles.eventTitle}>{this.props.eventTitle}</react_native_1.Text>
                <react_native_1.Text style={styles.eventDescription}>
                    {this.props.eventDescription}
                </react_native_1.Text>
                <react_native_1.View style={styles.interactionContainer}>
                    <react_native_1.TouchableOpacity style={styles.interactionButton}>
                        <react_native_1.Text>Confirm</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity style={styles.interactionButton}>
                        <react_native_1.Text>Interested</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity style={styles.interactionButton}>
                        <react_native_1.Text>Deny</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                </react_native_1.View>
            </react_native_1.View>);
    };
    return EventItem;
}(react_1.default.Component));
exports.default = EventItem;
var styles = react_native_1.StyleSheet.create({
    eventDescription: {
        paddingLeft: 10
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
    eventContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 3,
        marginTop: 3,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'white'
    },
    eventHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    eventProfilePic: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginLeft: 10
    },
    eventPosterName: {
        marginLeft: 15,
        fontSize: 15,
    },
    timePosted: {
        fontSize: 12,
        marginLeft: 15,
        color: 'grey'
    },
    eventTitle: {
        fontSize: 20,
    }
});
