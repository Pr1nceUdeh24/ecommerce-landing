import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../features/products/productsApi'
import uiReducer from '../features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
