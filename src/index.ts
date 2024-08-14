#!/usr/bin/env node
import prompts from "prompts"
import { basename, join } from "node:path"
import { execSync } from "node:child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import allContents from "./contents/_index"

const createPrompts = async () => {
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

    if (filename.includes(`/`)) {
      const onlyFolder = filename.slice(0, filename.lastIndexOf(`/`))
      mkdirSync(onlyFolder, { recursive: true })
    }

    writeFileSync(
      pathFile,
      content({
        previousContent: readFile,
        projectName: basename(process.cwd())
      }),
      { encoding: `utf8` }
    )
  }

  const defaultInstall = [`npm i @types/node --force --save-dev`]
  defaultInstall.forEach((cmd) => {
    execSync(cmd, { stdio: `inherit` })
  })
  ora(`Success installing all files\n`).succeed()
}

run()
