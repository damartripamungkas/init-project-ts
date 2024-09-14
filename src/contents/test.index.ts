import { getState } from "../libs/state"
import { TypeParamsContent } from "../type"

export default {
  filename: `test/index.test.ts`,
  command: () => {
    const projectRuntime = getState(`projectRuntime`)
    if (projectRuntime == `bun`) {
      return ``
    }
    return `npm i vitest --force --save-dev`
  },
  content: ({ previousContent }: TypeParamsContent) => {
    const projectRuntime = getState(`projectRuntime`)
    if (projectRuntime == `bun`) {
      return `import { describe, it, expect } from "bun:test"
import contextDummy from "../src/index"

describe("test file index.ts", () => {
  it("get context dummy", () => {
    const res = contextDummy()
    expect(res.id).toBe(1)
  })
})`
    }

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
