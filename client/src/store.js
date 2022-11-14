import { configureStore } from '@reduxjs/toolkit'
import housesReducers from './reducers/housesReducers'
import searchReducers from './reducers/searchReducers'

export default configureStore({
  reducer: {
    houses: housesReducers,
    search: searchReducers
  },
})