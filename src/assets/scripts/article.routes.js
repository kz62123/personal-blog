const { sourceFileArray } = require(`../../contents/summary.json`)

const articles = sourceFileArray.map((file) => {
  const splitedFile = file.split(/\/|_|\./)
  return `/articles/${splitedFile[splitedFile.length - 3]}/${
    splitedFile[splitedFile.length - 2]
  }/`
})

export { articles }
