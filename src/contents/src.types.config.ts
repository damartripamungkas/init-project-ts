import { TypeParamsContent } from "../type"

export default {
  filename: `src/types/config.ts`,
  command: () => {
    return ``
  },
  content: ({ previousContent }: TypeParamsContent) => {
    return `export type TypeConfig = {}`
  }
}
