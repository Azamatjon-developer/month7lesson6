import { SAVE_LIKE } from '../types'

const initialState = {
  saveLikeList: [],
}

export const likeList = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_LIKE:
      if (!state.saveLikeList.includes(action.payload)) {
        return {
          saveLikeList: [...state.saveLikeList, action.payload],
        }
      } else {
        return state
      }
    default:
      return {
        saveLikeList: [...state.saveLikeList],
      }
  }
}
