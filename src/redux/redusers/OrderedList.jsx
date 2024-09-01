import { ORDERED_PRODUCTS } from '../types'

const initialState = []

export const OrderedList = (state = initialState, action) => {
  switch (action.type) {
    case ORDERED_PRODUCTS:
      if (!state.includes(action.payload)) {
        return [...state, action.payload]}
        else {
        return [...state]
      }
    default:
      return state
      
  }
}
