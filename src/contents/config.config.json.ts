import { TypeParamsContent } from "../type"

export default {
  filename: `config/config.json`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return JSON.stringify({})
  }
}
