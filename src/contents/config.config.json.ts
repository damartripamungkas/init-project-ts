import { TypeParamsContent } from "../type"

export default {
  filename: `config/config.json`,
  command: () => {
    return ``
  },
  content: ({ previousContent }: TypeParamsContent) => {
    return JSON.stringify({})
  }
}
