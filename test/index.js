const { basename } = require("path")

if (basename(process.cwd()) == `test`) {
  require(`..`)
}
