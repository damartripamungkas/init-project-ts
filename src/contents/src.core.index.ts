import { TypeParamsContent } from "../type"

export default {
  filename: `src/core/index.ts`,
  command: ``,
  content: ({ previousContent }: TypeParamsContent) => {
    return `export default () => {
  return {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99
  }
}`
  }
}
