export interface Item {
  id: number
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
