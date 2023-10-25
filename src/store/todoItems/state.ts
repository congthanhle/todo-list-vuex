export interface Item {
  id: string
  name: string
  level: number
  timestamp: number
}

export interface ItemsState {
  items: Item[]
}

const state: ItemsState = {
  items: []
}

export default state
