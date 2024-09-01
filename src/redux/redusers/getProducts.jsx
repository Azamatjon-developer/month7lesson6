import { GET_ALL_PRODUCTS } from '../types'

const initialState = []

export const getProduct = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return [...action.payload]

    default:
      return state
  }
}
 