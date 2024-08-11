import { TypeParamsContent } from "../type"

export default {
  filename: `src/components/index.ts`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return `const context = {}
export {context}
export default context`
  }
}
