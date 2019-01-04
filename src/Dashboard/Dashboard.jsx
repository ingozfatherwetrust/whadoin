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
var EventItem_1 = require("../EventList/EventItem");
var events_1 = require("../../assets/jsonFiles/events");
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addEvent = function () {
            alert('add event');
        };
        return _this;
    }
    Dashboard.prototype.render = function () {
        var keyExtractor = function (_, index) { return String(index); };
        return (<react_native_1.View style={styles.container}>
                <react_native_1.View style={styles.dashboard}>
                    <react_native_1.FlatList keyExtractor={keyExtractor} data={events_1.default} renderItem={function (_a) {
            var item = _a.item;
            return <EventItem_1.default userName={item.userName} eventTitle={item.eventTitle} eventDescription={item.eventDescription}/>;
        }}/>

                </react_native_1.View>
                <react_native_1.View style={styles.footer}>
                    <react_native_1.TouchableOpacity style={styles.addEventButton} onPress={this.addEvent}>
                        <react_native_1.Text style={styles.selectedNavButtonText}>View Events</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity style={styles.addEventButton} onPress={this.addEvent}>
                        <react_native_1.Text style={styles.addEventText}>Add Event</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity style={styles.addEventButton} onPress={this.addEvent}>
                        <react_native_1.Text style={styles.addEventText}>Manage Groups</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity style={styles.addEventButton} onPress={this.addEvent}>
                        <react_native_1.Text style={styles.addEventText}>View Profile</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                </react_native_1.View>

            </react_native_1.View>);
    };
    return Dashboard;
}(react_1.default.Component));
exports.default = Dashboard;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'grey'
    },
    dashboard: {
        flex: 10
    },
    footer: {
        flex: 1,
        flexDirection: 'row'
    },
    addEventButton: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'white',
        borderRightWidth: .5
        // marginLeft: 10,
    },
    addEventText: {
        fontSize: 10,
        color: '#bfbfbf',
    },
    selectedNavButtonText: {
        fontSize: 10,
        color: 'green'
    }
});
