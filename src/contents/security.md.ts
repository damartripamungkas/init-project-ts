import { TypeParamsContent } from "../type"

export default {
  filename: `SECURITY.md`,
  command: () => {
    return ``
  },
  content: ({ previousContent }: TypeParamsContent) => {
    return `# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| 2.x.x   | :white_check_mark: |

## Reporting a Vulnerability

pull request`
  }
}
