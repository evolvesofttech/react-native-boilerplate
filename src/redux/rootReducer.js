import { combineReducers } from 'redux';
import homeReducer from '../screens/Home/redux/reducer';

const rootReducer = () => combineReducers({
    home: homeReducer
});

export default rootReducer;