import { TypeParamsContent } from "../type"

export default {
  filename: `src/components/index.ts`,
  command: () => {
    return ``
  },
  content: ({ previousContent }: TypeParamsContent) => {
    return `const context = {}
export {context}
export default context`
  }
}
