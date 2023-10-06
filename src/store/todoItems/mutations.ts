import type { MutationTree } from 'vuex/types/index.js'
import type { ItemsState, Item } from '@store/todoItems/state'
import { items } from '@/data'

const mutations: MutationTree<ItemsState> = {
  getItems: (state: ItemsState, items: Item[]) => {
    state.items = items
  },
  addItem: (state: ItemsState, item: Item) => {
    state.items.push(item)
  },
  deleteItem: (state: ItemsState, id: string) => {
    state.items = state.items.filter((item) => item.id !== id)
  },
  editItem: (state: ItemsState, editeditem: Item) => {
    state.items = state.items.map((item: Item) => (item.id === editeditem.id ? editeditem : item))
  },
  searchItems: (state: ItemsState, queryValue: string) => {
    const searchQuery = queryValue.toLowerCase()
    state.items =
      queryValue !== ''
        ? state.items.filter((item) => item.name.toLowerCase().includes(searchQuery))
        : items
  },
  sortItems: (state: ItemsState, sortOption: string) => {
    switch (sortOption) {
      case 'NameASC':
        state.items.sort((currItem, nextItem) => {
          return currItem.name.localeCompare(nextItem.name)
        })
        break
      case 'NameDESC':
        state.items.sort((currItem, nextItem) => {
          return nextItem.name.localeCompare(currItem.name)
        })
        break
      case 'LevelASC':
        state.items.sort((currItem, nextItem) => {
          return currItem.level - nextItem.level
        })
        break
      case 'LevelDESC':
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
