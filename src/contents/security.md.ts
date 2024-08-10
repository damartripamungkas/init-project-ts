import { TypeParamsContent } from "../type"

export default {
  filename: `SECURITY.md`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return `# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

pull request`
  }
}
