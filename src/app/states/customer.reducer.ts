import {ActionEx, CustomerActionTypes} from './customer.actions';
export const initialState = [];
export function CustomerReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case CustomerActionTypes.addhistory:
      return [...state, action.payload];
    case CustomerActionTypes.clearhistory:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}