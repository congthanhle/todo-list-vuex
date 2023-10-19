import type { GetterTree } from 'vuex/types/index.js'
import type { ItemsState } from '@store/todoItems/state'
import type { RootState } from '@store/index'

const getters: GetterTree<ItemsState, RootState> = {
  ALL_ITEMS: (state: ItemsState) => state.items
}

export default getters;
