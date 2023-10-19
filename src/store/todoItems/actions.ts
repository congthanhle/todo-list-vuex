import type { ActionTree, Commit } from 'vuex/types/index.js'
import type { ItemsState, Item } from '@store/todoItems/state'
import { collection, doc, getDocs, deleteDoc, addDoc, updateDoc } from 'firebase/firestore'
import type { RootState } from '@store/index'
import { database } from '@/firebase'

const itemsCollectionRef = collection(database, 'todos')

const actions: ActionTree<ItemsState, RootState> = {
  FETCH_ITEMS: async ({ commit }: { commit: Commit }) => {
    const items: Item[] = []
    const querySnapshot = await getDocs(itemsCollectionRef)
    querySnapshot.forEach((doc) => {
      const item: Item = {
        id: doc.id,
        name: doc.data().name,
        level: doc.data().level
      }
      items.push(item)
    })
    commit('SET_ITEMS', items)
  },
  ADD_ITEM: async ({ commit }: { commit: Commit }, item: Item) => {
    await addDoc(itemsCollectionRef, {
      name: item.name,
      level: item.level
    })
    commit('ADD_ITEM', item)
  },
  DELETE_ITEM: async ({ commit }: { commit: Commit }, id: string) => {
    await deleteDoc(doc(itemsCollectionRef, id))
    commit('DELETE_ITEM', id)
  },
  EDIT_ITEM: async ({ commit }: { commit: Commit }, item: Item) => {
    await updateDoc(doc(itemsCollectionRef, item.id), {
      name: item.name,
      level: item.level
    })
    commit('EDIT_ITEM', item)
  },
  SEARCH_ITEMS: async ({ commit }: { commit: Commit }, queryValue: string) => {
    const searchQuery = queryValue.toLowerCase()
    const originalItems: Item[] = []
    const querySnapshot = await getDocs(itemsCollectionRef)
    querySnapshot.forEach((doc) => {
      const item: Item = {
        id: doc.id,
        name: doc.data().name,
        level: doc.data().level
      }
      originalItems.push(item)
    })
    if (searchQuery === '') {
      commit('SET_ITEMS', originalItems)
    } else {
      const filteredItems = originalItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      )
      commit('SET_ITEMS', filteredItems)
    }
  },
  SORT_ITEMS: ({ commit }: { commit: Commit }, sortOption: string) => {
    commit('SORT_ITEMS', sortOption)
  }
}

export default actions
