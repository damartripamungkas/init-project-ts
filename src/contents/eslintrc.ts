export default {
  filename: `.eslintrc.json`,
  command: `npm init @eslint/config --force --save-dev`,
  havePureContent: true,
  content: (pureContent: any) => {
    pureContent[`rules`] = {
      "@typescript-eslint/no-explicit-any": 0
    }
    return JSON.stringify(pureContent, null, 2)
  }
}
