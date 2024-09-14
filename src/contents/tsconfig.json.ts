import { getState } from "../libs/state"
import { TypeParamsContent } from "../type"

export default {
  filename: `tsconfig.json`,
  command: () => {
    return ``
  },
  content: ({ previousContent }: TypeParamsContent) => {
    const projectRuntime = getState(`projectRuntime`)
    if (projectRuntime == `bun`) {
      return `{
  "compilerOptions": {
    // Enable latest features
    "lib": ["ESNext", "DOM"],
    "target": "ESNext",
    "module": "ESNext",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,

    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,

    // Some stricter flags (disabled by default)
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false
  }
}`
    }

    return JSON.stringify(
      {
        compilerOptions: {
          target: "ESNext",
          module: "NodeNext",
          moduleResolution: "NodeNext",
          allowSyntheticDefaultImports: true
        },
        include: ["src/*.ts", "src/**/*.ts", "**/*.ts"]
      },
      null,
      2
    )
  }
}
