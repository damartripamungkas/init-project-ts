import { basename } from "node:path"
import { describe, expect, test } from "vitest"
const base = basename(process.cwd())

describe(`test file index.ts`, () => {
  test(`is position shell in folder test?`, async () => {
    expect(base).toBe(`test`)
  })
})
