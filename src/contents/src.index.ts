import { TypeParamsContent } from "../type"

export default {
  filename: `src/index.ts`,
  command: ``,
  content: ({ previousContent }: TypeParamsContent) => {
    return `import context from "./core/index"
export default context
`
  }
}
