import { TypeParamsContent } from "../type"

export default {
  filename: `test/index.test.ts`,
  command: `npm i vitest --force --save-dev`,
  content: ({ previousContent }: TypeParamsContent) => {
    return `import { describe, expect, test } from "vitest"
import contextDummy from "../src/index"

describe("test file index.ts", () => {
  test("get context dummy", () => {
    const res = contextDummy()
    expect(res.id).toBe(1)
  })
})
`
  }
}
