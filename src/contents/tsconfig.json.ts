export default {
  filename: `tsconfig.json`,
  command: ``,
  havePureContent: false,
  content: () => {
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
