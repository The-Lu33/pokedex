import { configureStore } from '@reduxjs/toolkit'
import startSlice from './slices/start.slice'
export default configureStore({
  reducer: {
    name: startSlice
	}
})