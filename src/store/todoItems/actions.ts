import type { ActionTree, Commit } from 'vuex/types/index.js'
import type { ItemsState, Item } from '@store/todoItems/state'
import type { RootState } from '@store/index'
import { items } from '@/data'

const actions: ActionTree<ItemsState, RootState> = {
  fetchItems: ({ commit }: { commit: Commit }) => {
    commit('getItems', items)
  },
  addItem: ({ commit }: { commit: Commit }, item: Item) => {
    commit('addItem', item)
  },
  deleteItem: ({ commit }: { commit: Commit }, id: number) => {
    commit('deleteItem', id)
  },
  editItem: ({ commit }: { commit: Commit }, item: Item) => {
    commit('editItem', item)
  },
  searchItems: ({ commit }: { commit: Commit }, queryValue: string) => {
    commit('searchItems', queryValue)
  },
  sortItems: ({ commit }: { commit: Commit }, sortOption: string) => {
    commit('sortItems', sortOption)
  }
}

export default actions
