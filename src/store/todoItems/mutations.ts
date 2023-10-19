import type { MutationTree } from 'vuex/types/index.js'
import type { ItemsState, Item } from '@store/todoItems/state'

const mutations: MutationTree<ItemsState> = {
  SET_ITEMS: (state: ItemsState, items: Item[]) => {
    state.items = items
  },
  ADD_ITEM: (state: ItemsState, item: Item) => {
    state.items.push(item)
    
  },
  DELETE_ITEM: (state: ItemsState, id: string) => {
    state.items = state.items.filter((item) => item.id !== id)
  },
  EDIT_ITEM: (state: ItemsState, editeditem: Item) => {
    state.items = state.items.map((item: Item) => (item.id === editeditem.id ? editeditem : item))
  },
  SORT_ITEMS: (state: ItemsState, sortOption: string) => {
    switch (sortOption) {
      case 'Name-ASC':
        state.items.sort((currItem, nextItem) => {
          return currItem.name.localeCompare(nextItem.name)
        })
        break
      case 'Name-DESC':
        state.items.sort((currItem, nextItem) => {
          return nextItem.name.localeCompare(currItem.name)
        })
        break
      case 'Level-ASC':
        state.items.sort((currItem, nextItem) => {
          return currItem.level - nextItem.level
        })
        break
      case 'Level-DESC':
        state.items.sort((currItem, nextItem) => {
          return nextItem.level - currItem.level
        })
        break
      default:
        break
    }
  }
}
export default mutations
