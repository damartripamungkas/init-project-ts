import { TypeParamsContent } from "../type"

export default {
  filename: `package.json`,
  command: ``,
  content: ({ previousContent, projectName }: TypeParamsContent) => {
    return JSON.stringify(
      {
        name: projectName,
        version: "1.0.0",
        description: "",
        scripts: {
          build: "tsup",
          test: "node ./test/index.js",
          start: "node ./dist/src/index.js",
          publish_npm: "npm run build && npm publish"
        },
        homepage: `https://github.com/USERNAME/${projectName}`,
        repository: {
          type: "git",
          url: `https://github.com/USERNAME/${projectName}.git`
        },
        bugs: {
          url: `https://github.com/USERNAME/${projectName}/issues`
        },
        keywords: [],
        main: "./dist/src/index.js",
        module: "./dist/src/index.mjs",
        types: "./dist/src/index.d.ts",
        files: ["dist"],
        author: "YOUR_NAME",
        license: "MIT",
        devDependencies: {},
        dependencies: {}
      },
      null,
      2
    )
  }
}
