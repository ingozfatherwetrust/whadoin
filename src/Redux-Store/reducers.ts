import {combineReducers, Reducer} from "redux";

export interface StoreState {
    username: string;
}
const rootReducer: Reducer<StoreState> = combineReducers(<StoreState>);