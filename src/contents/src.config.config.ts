import { TypeParamsContent } from "../type"

export default {
  filename: `src/config/config.ts`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return `import { join } from "node:path"
import { readFileSync } from "node:fs"
import { TypeConfig } from "../types/config";

const pathConfig = join(process.cwd(), "config", "config.json")
export const getConfig = () => JSON.parse(readFileSync(pathConfig, { encoding: "utf8" }))
export const config = getConfig()`
  }
}
