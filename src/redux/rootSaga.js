import { all } from 'redux-saga/effects';
import { homeSagas } from '../screens/Home/redux/operations';

export default function* rootSaga() {
    yield all([
        ...homeSagas
    ])
}