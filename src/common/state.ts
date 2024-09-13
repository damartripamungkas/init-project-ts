const state: any = {}

const setState = (key: string, value: any) => {
  state[key] = value
  return true
}

const getState = (key: string) => {
  return state[key]
}

export { setState, getState }
