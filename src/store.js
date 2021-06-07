import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import * as ACTIONS from './actions';

const initialState = {
    selectedDateString: new Date().toISOString().slice(0, 10),
    displayType: 'default',
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case ACTIONS.UPDATE_SELECTED_DATE_STRING:
                return {
                    ...state,
                    selectedDateString: action.payload.selectedDateString
                };
            case ACTIONS.UPDATE_DISPLAY_TYPE:
                return {
                    ...state,
                    displayType: action.payload.displayType
                };
            default:
                throw new Error();
        }
    }, initialState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
StateProvider.propTypes = {
    children: PropTypes.node
};
export { store, StateProvider };