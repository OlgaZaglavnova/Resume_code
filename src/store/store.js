import {createStore, combineReducers} from "redux";
import myReducer from "./myReducer";
import {createBrowserHistory} from 'history';
import {connectRouter} from 'connected-react-router';

export const history = createBrowserHistory();

const reducer = combineReducers({
    myReducer,
    router: connectRouter(history),
});

export const initStore =(preloadedState = {}) => {
   return createStore(reducer, preloadedState);
}