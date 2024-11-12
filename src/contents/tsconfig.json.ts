import state from "../libs/state"
import { TypeParamsContent } from "../type"

export default {
  filename: `tsconfig.json`,
  command: () => {
    return ``
  },
  content: ({ previousContent }: TypeParamsContent) => {
    const { projectRuntime } = state
    if (projectRuntime == `bun`) {
      return JSON.stringify(
        {
          compilerOptions: {
            // Enable latest features
            lib: ["ESNext", "DOM"],
            target: "ESNext",
            module: "ES2022",
            moduleDetection: "force",
            jsx: "react-jsx",
            allowJs: true,

            // Bundler mode
            moduleResolution: "bundler",
            allowImportingTsExtensions: true,
            verbatimModuleSyntax: true,
            noEmit: true,

            // Best practices
            strict: true,
            skipLibCheck: true,
            noFallthroughCasesInSwitch: true,

            // Some stricter flags (disabled by default)
            noUnusedLocals: false,
            noUnusedParameters: false,
            noPropertyAccessFromIndexSignature: false
          }
        },
        null,
        2
      )
    }

    return JSON.stringify(
      {
        compilerOptions: {
          target: "ESNext",
          module: "ES2022",
          moduleResolution: "Bundler",
          allowSyntheticDefaultImports: true
        },
        include: ["src/*.ts", "src/**/*.ts", "src/**/**/*.ts", "**/*.ts"]
      },
      null,
      2
    )
  }
}
