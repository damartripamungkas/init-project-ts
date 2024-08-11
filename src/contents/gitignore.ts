import { TypeParamsContent } from "../type"

export default {
  filename: `.gitignore`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return `node_modules
dist`
  }
}
