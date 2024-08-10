import { TypeParamsContent } from "../type"

export default {
  filename: `tsup.config.ts`,
  command: `npm i tsup --force --save-dev`,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return `import { defineConfig } from "tsup"
export default defineConfig({
  outDir: "./dist/src",
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"],
  cjsInterop: false,
  dts: true,
  clean: true,
  minify: true
})
`
  }
}
