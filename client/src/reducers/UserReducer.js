import { ADD_USER } from '../actions/UserActions'

const initialState = { user: [] }

export default function userReducer (state = initialState, action) {
  if (action.type === ADD_USER) {
    return {
      ...state,
      user: action.payload
    }
  }
  return state
}
