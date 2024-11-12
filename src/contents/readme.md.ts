import state from "../libs/state"
import { TypeParamsContent } from "../type"

export default {
  filename: `README.md`,
  command: () => {
    return ``
  },
  content: ({ previousContent }: TypeParamsContent) => {
    const { projectName } = state
    return `<h1 align="center">${projectName}</h1>`
  }
}
