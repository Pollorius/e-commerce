import { GET_CATEGORIES, ADD_CATEGORY } from '../actions/CategoryActions.js'

const inicialState = {
  categories: []
}

export default function CategoryReducer (state = inicialState, action) {
  if (action.type === GET_CATEGORIES) {
    return {
      ...state,
      categories: action.payload

    }
  }
  if (action.type === ADD_CATEGORY) {
    return {
      ...state,
      categories: action.payload

    }
  }
  return state
}
