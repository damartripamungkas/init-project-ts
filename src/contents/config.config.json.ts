import { TypeParamsContent } from "../type"

export default {
  filename: `config/config.json`,
  command: ``,
  content: ({ previousContent }: TypeParamsContent) => {
    return JSON.stringify({})
  }
}
