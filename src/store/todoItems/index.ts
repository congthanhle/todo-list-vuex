import type { Module } from 'vuex/types/index.js'
import type { ItemsState } from '@store/todoItems/state'
import state from '@store/todoItems/state'
import getters from '@store/todoItems/getters'
import mutations from '@store/todoItems/mutations'
import actions from '@store/todoItems/actions'
import type { RootState } from '@store/index'

const itemsModule: Module<ItemsState, RootState> = {
  state,
  getters,
  mutations,
  actions
}

export default itemsModule
