import { TypeParamsContent } from "../type"

export default {
  filename: `.eslintrc.json`,
  command: `npm init @eslint/config --force --save-dev`,
  content: ({ previousContent }: TypeParamsContent) => {
    previousContent[`rules`] = {
      "@typescript-eslint/no-explicit-any": 0
    }
    return JSON.stringify(previousContent, null, 2)
  }
}
