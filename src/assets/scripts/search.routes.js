const envSet = require(`../../../env.js`)
const { fileMap } = require(`../../contents/summary.json`)

const categoryMap = {}
const tagMap = {}
Object.values(fileMap).forEach((value) => {
  if (categoryMap[value.category]) {
    categoryMap[value.category]++
  } else {
    categoryMap[value.category] = 1
  }
  value.tags.forEach((tag) => {
    if (tagMap[tag]) {
      tagMap[tag]++
    } else {
      tagMap[tag] = 1
    }
  })
})

const categories = new Set()
Object.keys(categoryMap).forEach((key) => {
  categories.add(`/search/category/${key}/`)
  for (let i = 0; i < categoryMap[key]; i++) {
    categories.add(
      `/search/category/${key}/${Math.ceil((i + 1) / envSet.pageRange)}/`
    )
  }
})

const tags = new Set()
Object.keys(tagMap).forEach((key) => {
  tags.add(`/search/tag/${key}/`)
  for (let i = 0; i < tagMap[key]; i++) {
    tags.add(`/search/tag/${key}/${Math.ceil((i + 1) / envSet.pageRange)}/`)
  }
})

export { categories, tags }
