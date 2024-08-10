import { TypeParamsContent } from "../type"

export default {
  filename: `test/index.js`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return `require("..")`
  }
}
