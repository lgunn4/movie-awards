import {ADD_NOMINATION, REMOVE_NOMINATION, SET_SIDE_BAR_CLOSED, SET_SIDE_BAR_OPEN} from "./ActionTypes";

export const addNoination = (id, content) => ({
    type: ADD_NOMINATION,
    payload: {
        id: id,
        content
    }
});

export const removeNomination = imdbID => ({
    type: REMOVE_NOMINATION,
    payload: { imdbID }
});

export const setSideBarOpen = () => ({ type: SET_SIDE_BAR_OPEN });
export const setSideBarClosed = () => ({ type: SET_SIDE_BAR_CLOSED });

