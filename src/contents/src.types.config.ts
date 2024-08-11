import { TypeParamsContent } from "../type"

export default {
  filename: `src/types/config.ts`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return `export type TypeConfig = {}`
  }
}
