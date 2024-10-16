import { getState } from "../libs/state"
import { TypeParamsContent } from "../type"

export default {
  filename: `package.json`,
  command: () => {
    return ``
  },
  content: ({ previousContent }: TypeParamsContent) => {
    const projectName = getState(`projectName`)
    const projectRuntime = getState(`projectRuntime`)
    const obj = {
      name: projectName,
      version: "1.0.0",
      description: "",
      type: "commonjs",
      scripts: {
        build: "tsup",
        test: "vitest",
        dev: "ts-node-dev ./src/index.ts",
        start: "node ./dist/src/index.js",
        publish_npm: "npm run build && npm publish"
      },
      generator: "init-project-ts",
      homepage: `https://github.com/{USERNAME}/${projectName}`,
      repository: {
        type: "git",
        url: `https://github.com/{USERNAME}/${projectName}.git`
      },
      bugs: {
        url: `https://github.com/{USERNAME}/${projectName}/issues`
      },
      keywords: [],
      main: "./dist/src/index.js",
      module: "./dist/src/index.mjs",
      types: "./dist/src/index.d.ts",
      files: ["dist"],
      author: "{YOUR_NAME}",
      license: "MIT",
      devDependencies: {},
      dependencies: {}
    }

    if (projectRuntime == `bun`) {
      obj.type = `module`
      obj.scripts.test = `bun test --watch`
      obj.scripts.start = `bun ./src/index.ts`
    }

    return JSON.stringify(obj, null, 2)
  }
}
