import types from './types';

export const toggleText = value => {
    return {
        type: types.TOGGLE_TEXT,
        value: value
    }
}
export const navigateToAbout = value => {
    return {
        type: types.NAVIGATE_TO_ABOUT,
        value: value
    }
}

export default {
    toggleText,
    navigateToAbout
}