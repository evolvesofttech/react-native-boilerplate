import actions from './actions';
import types from './types';
import { takeLatest } from 'redux-saga/effects';
import * as NavigationService from '../../../services/NavigationService';

export function* navigateToAbout() {
    NavigationService.navigate('About', {});
}

export const homeSagas = [
    takeLatest(types.NAVIGATE_TO_ABOUT, navigateToAbout)
]
