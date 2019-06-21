export interface Item {
  id: number,
  name: string,
  active: boolean,
  date: number,
  state: State
}

export interface State {
    key: number,
    value: string
}