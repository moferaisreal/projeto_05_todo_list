import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tasks: tarefasReducer
  },
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
