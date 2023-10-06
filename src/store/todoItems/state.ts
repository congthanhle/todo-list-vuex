export interface Item {
  id: string
  name: string
  level: number
}

export interface ItemsState {
  items: Item[]
}

const state: ItemsState = {
  items: []
}

export default state
