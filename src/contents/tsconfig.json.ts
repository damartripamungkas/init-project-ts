import { TypeParamsContent } from "../type"

export default {
  filename: `tsconfig.json`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return JSON.stringify(
      {
        compilerOptions: {
          target: "ESNext",
          module: "NodeNext",
          moduleResolution: "NodeNext",
          allowSyntheticDefaultImports: true
        },
        include: ["src/*.ts", "src/**/*.ts", "**/*.ts", "*.ts"]
      },
      null,
      2
    )
  }
}
