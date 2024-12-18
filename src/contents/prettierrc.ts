import { TypeParamsContent } from "../type"

export default {
  filename: `.prettierrc`,
  command: () => {
    return ``
  },
  content: ({ previousContent }: TypeParamsContent) => {
    return JSON.stringify(
      {
        overrides: [
          {
            files: "*.json",
            options: {
              tabWidth: 2,
              printWidth: 200
            }
          },
          {
            files: "*.{ts,mts}",
            options: {
              printWidth: 200,
              tabWidth: 2,
              useTabs: false,
              semi: false,
              arrowParens: "always",
              trailingComma: "none",
              bracketSameLine: false
            }
          },
          {
            files: "*.js",
            options: {
              printWidth: 200,
              tabWidth: 2,
              useTabs: false,
              semi: false,
              trailingComma: "none",
              arrowParens: "always",
              bracketSameLine: false
            }
          },
          {
            files: "*.md",
            options: {
              printWidth: 400,
              tabWidth: 2,
              useTabs: false,
              semi: false,
              trailingComma: "none",
              arrowParens: "always",
              bracketSameLine: false
            }
          }
        ]
      },
      null,
      2
    )
  }
}
