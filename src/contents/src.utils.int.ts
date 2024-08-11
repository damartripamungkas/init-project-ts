import { TypeParamsContent } from "../type"

export default {
  filename: `src/utils/int.ts`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return `type TypeInt = number | bigint
export const formatToHex = (v: TypeInt) => {
  return "0x" + v.toString(16)
}

export const parseWithDecimals = (v: TypeInt | string, d: TypeInt) => {
  return BigInt(v) * BigInt(10) ** BigInt(d)
}`
  }
}
