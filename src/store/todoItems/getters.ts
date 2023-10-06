import type { GetterTree } from 'vuex/types/index.js'
import type { ItemsState } from '@store/todoItems/state'
import type { RootState } from '@store/index'

const getters: GetterTree<ItemsState, RootState> = {
  allItems: (state: ItemsState) => state.items
}

export default getters;
