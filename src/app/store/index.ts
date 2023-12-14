import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../../shared/api'

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware)
})
