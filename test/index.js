const { basename } = require(`node:path`)
const base = basename(process.cwd())
if (base == `test`) {
  require(`..`)
}
