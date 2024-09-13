import prompts from "prompts"
import { execSync } from "node:child_process"
import { basename, join } from "node:path"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { setState } from "../common/state"
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
  setState(`projectRuntime`, twoSelect.value)

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

const run = async () => {
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
    if (answer === false) {
      continue
    }

    // running command prompt if required
    if (command.length > 1) {
      const loading = ora(`Installing with command for ${filename} \n`).start()
      const res = execSync(command, { stdio: `inherit` })
      loading.succeed(`Success installing ${filename}: ${res === null ? `` : res.toString()}`)
    }

    let readFile
    const pathFile = join(process.cwd(), filename)
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

    // default command for install like @types/node
    if (filename == `package.json`) {
      const defaultCommand = [`npm i @types/node --force --save-dev`]
      defaultCommand.forEach((cmd) => {
        execSync(cmd, { stdio: `inherit` })
      })
    }
  }

  ora(`Success installing all files\n`).succeed()
  return true
}

setState(`projectName`, basename(process.cwd()))
export { run }
export default run