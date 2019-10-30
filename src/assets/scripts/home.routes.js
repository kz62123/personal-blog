const envSet = require(`../../../env.js`)
const { sourceFileArray } = require(`../../contents/summary.json`)

const homes = new Set()
sourceFileArray.forEach((_, i) => {
  homes.add(`/${Math.ceil((i + 1) / envSet.pageRange)}/`)
})

export { homes }
