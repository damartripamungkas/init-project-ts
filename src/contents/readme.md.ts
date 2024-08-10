import { TypeParamsContent } from "../type"

export default {
  filename: `README.md`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return `<h1 align="center">${projectName}</h1>`
  }
}
