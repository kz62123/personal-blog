const envSet = require(`../../../env/${process.env.NODE_ENV}.js`)
const { sourceFileArray } = require(`../../contents/summary.json`)

const homes = new Set()
sourceFileArray.forEach((_, i) => {
  homes.add(`/${Math.ceil((i + 1) / envSet.pageRange)}/`)
})

export { homes }
