import {combineReducers} from 'redux';
import getData from './reducer_getData';

const rootReducer = combineReducers({
    getData
});

export default rootReducer;