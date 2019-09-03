"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var events_1 = require("../../../assets/jsonFiles/events");
var Footer_1 = require("../NavigationFooter/Footer");
var AddEvent_1 = require("../AddEvent/AddEvent");
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard(props) {
        var _this = _super.call(this, props) || this;
        _this.setAddEventModalVisible = function () {
            _this.setState({ addEventModalVisible: !_this.state.addEventModalVisible });
        };
        _this.addEvent = function () {
            // this.props.navigation.navigate('AddEventPage')
            _this.setAddEventModalVisible();
        };
        _this.manageGroups = function () {
            alert('manageGroups');
        };
        _this.renderBottomOfPage = function () {
            if (_this.state.addEventModalVisible) {
                return (<react_native_1.View style={styles.modalContainer}>
                    <react_native_1.Modal animationType="slide" transparent={false} visible={_this.state.addEventModalVisible} onRequestClose={function () {
                    alert('Modal has been closed.');
                }}>
                            <AddEvent_1.default onCancel={_this.setAddEventModalVisible} onSubmit={_this.manageGroups}/>

                    </react_native_1.Modal>
                </react_native_1.View>);
            }
            return (<Footer_1.default onAddEvent={_this.addEvent} onManageGroups={_this.manageGroups}/>);
        };
        _this.state = {
            addEventModalVisible: false
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
                {this.renderBottomOfPage()}

            </react_native_1.View>);
    };
    Dashboard.navigationOptions = {
        title: 'WhaDoin',
        headerLeft: null,
        headerStyle: {
            backgroundColor: 'green',
        },
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
    modalContainer: {
        height: 500,
        color: 'blue'
    }
});
