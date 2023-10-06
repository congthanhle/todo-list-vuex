import type { ItemsState } from '@store/todoItems/state'
import { createStore } from 'vuex'
import todoItems from '@store/todoItems'

export interface RootState {
  todoItems: ItemsState
}

const store = createStore<RootState>({
  modules: {
    todoItems
  }
})

export default store
