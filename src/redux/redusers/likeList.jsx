import { SAVE_LIKE } from '../types'

const initialState = []

export const likeList = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_LIKE:
      if (!state.includes(action.payload)) {
        return [...state, action.payload]
      } else {
        return [...state]
      }
    default:
      return state
  }
}
