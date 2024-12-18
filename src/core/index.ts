import prompts from "prompts"
import { join } from "node:path"
import { execSync } from "node:child_process"
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import state from "../libs/state"
import allContents from "../contents/_index"
const packageJson = require(`../../package.json`)

const createPrompts = async () => {
  const { first: firstConfirm } = await prompts({
    type: `confirm`,
    name: `first`,
    message: `🚀 Welcome to init project typescript v${packageJson.version}, do you want continue?`
  })
  if (firstConfirm === false) {
    return
  }

  const { two: twoSelect } = await prompts({
    type: `select`,
    name: `two`,
    message: `What is your runtime project typescript?`,
    choices: [
      { title: "Node", value: "node" },
      { title: "Bun", value: "bun" }
    ],
    initial: 0
  })
  state.projectRuntime = twoSelect

  const params = allContents.map((it, index) => {
    return {
      type: `confirm`,
      name: `val_${index}`,
      message: `Install file ${it.filename}?`,
      initial: true
    }
  })

  const resAll = []
  await prompts(params as any, {
    onCancel(prompt, answers) {
      process.exit()
    },
    onSubmit(prompt, answer, answers) {
      const index = parseInt(prompt.name.toString().replace(`val_`, ``))
      const obj = { ...allContents[index], answer }
      resAll.push(obj)
    }
  })

  return resAll
}

const run = async (pathRoot = process.cwd()) => {
  state.pathRoot = pathRoot
  console.log(`
██╗      ██████╗    ████████╗
██║      ██╔══██╗   ╚══██╔══╝
██║█████╗██████╔╝█████╗██║   
██║╚════╝██╔═══╝ ╚════╝██║   
██║      ██║           ██║   
╚═╝      ╚═╝           ╚═╝   
https://github.com/damartripamungkas/init-project-ts
`)

  const ora = (await import(`ora`)).default
  const resAll = await createPrompts()
  for (let index = 0; index < resAll.length; index++) {
    const { filename, command, content, answer } = resAll[index]
    const cmd = command()
    if (answer === false) {
      continue
    }

    // running command prompt if required
    if (cmd.length > 1) {
      const loading = ora(`Installing with command for ${filename} \n`).start()
      const res = execSync(cmd, { stdio: `inherit` })
      loading.succeed(`Success installing ${filename}: ${res === null ? `` : res.toString()}`)
    }

    let readFile
    const pathFile = join(pathRoot, filename)
    if (existsSync(pathFile) === true) {
      readFile = JSON.parse(readFileSync(pathFile, { encoding: `utf8` }))
    }

    // create folder if required
    if (filename.includes(`/`)) {
      const onlyFolder = filename.slice(0, filename.lastIndexOf(`/`))
      mkdirSync(onlyFolder, { recursive: true })
    }

    // write content to file
    writeFileSync(
      pathFile,
      content({
        previousContent: readFile
      }),
      { encoding: `utf8` }
    )
  }

  const answerPackageJson = resAll.find((it) => it.filename == `package.json`)
  const { projectRuntime } = state
  if (answerPackageJson.answer === true) {
    // default command for install in runtime "node" like @types/node
    const defaultCommandNode = [
      [`node-bun`, `npm i @types/node --force --save-dev`],
      [`node`, `npm i --save-dev tsx`]
    ]

    defaultCommandNode.forEach((arr) => {
      const [forRuntime, cmd] = arr
      if (forRuntime.includes(projectRuntime) === false) {
        return
      }
      execSync(cmd, { stdio: `inherit` })
    })
    ora(`Success install default command for runtime node\n`).succeed()

    // default command for install in runtime "bun" like @types/node
    if (projectRuntime == `bun`) {
      const defaultCommandBun = [`bun i`, `bun add -d @types/bun`]
      defaultCommandBun.forEach((cmd) => {
        execSync(cmd, { stdio: `inherit` })
      })
      ora(`Success install default command for runtime bun\n`).succeed()

      const pathJsonLock = join(pathRoot, `package-lock.json`)
      rmSync(pathJsonLock, { force: true, recursive: true })
    }
  }

  ora(`Success installing all files\n`).succeed()
  return true
}

export { run }
export default run
