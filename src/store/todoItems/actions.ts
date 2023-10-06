import type { ActionTree, Commit } from 'vuex/types/index.js'
import type { ItemsState, Item } from '@store/todoItems/state'
import { collection, doc, getDocs, deleteDoc, addDoc, updateDoc } from 'firebase/firestore'
import type { RootState } from '@store/index'
import { db } from '@/firebase'

const itemsCollectionRef = collection(db, 'todos')

const actions: ActionTree<ItemsState, RootState> = {
  fetchItems: async ({ commit }: { commit: Commit }) => {
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
    commit('setItems', items)
  },
  addItem: async ({ commit }: { commit: Commit }, item: Item) => {
    await addDoc(itemsCollectionRef, {
      name: item.name,
      level: item.level
    })
    commit('addItem', item)
  },
  deleteItem: async ({ commit }: { commit: Commit }, id: string) => {
    await deleteDoc(doc(itemsCollectionRef, id))
    commit('deleteItem', id)
  },
  editItem: async ({ commit }: { commit: Commit }, item: Item) => {
    await updateDoc(doc(itemsCollectionRef, item.id), {
      name: item.name,
      level: item.level
    })
    commit('editItem', item)
  },
  searchItems: async ({ commit }: { commit: Commit }, queryValue: string) => {
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
      commit('setItems', originalItems)
    } else {
      const filteredItems = originalItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      )
      commit('setItems', filteredItems)
    }
  },
  sortItems: ({ commit }: { commit: Commit }, sortOption: string) => {
    commit('sortItems', sortOption)
  }
}

export default actions
