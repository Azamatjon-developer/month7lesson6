import { combineReducers } from 'redux'
import { getProduct } from './getProducts'
import { likeList } from './likeList'
import { savedProducts } from './SavedProducts'
import {OrderedList} from "./OrderedList"

export const rootReduser = combineReducers({
  getProduct,
  likeList,
  savedProducts,
  OrderedList
})
