import { SAVED_PRODUCTS } from '../types'

const initialState = []

export const savedProducts = (state = initialState, action) => {
  switch (action.type) {
    case SAVED_PRODUCTS:
      if (!state.includes(action.payload)) {
        return [...state, action.payload]}
        else {
        return [...state]
      }
    default:
      return state
      
  }
}
