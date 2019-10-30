export default {
  watchQuery: true,

  scrollToTop: true,

  async asyncData({ params }) {
    const { fileMap, sourceFileArray } = await import('~/contents/summary.json')

    // 記事一覧取得
    const articles = sourceFileArray
      .sort()
      .reverse()
      .map((sourceFile) => {
        const replacedSourceFile = sourceFile
          .replace('/markdown/', '/json/')
          .replace('.md', '.json')
        return fileMap[replacedSourceFile]
      })
      .filter((article) => {
        if (params.column === 'category') {
          return article.category === params.value
        } else if (params.column === 'tag') {
          return article.tags.includes(params.value)
        } else {
          return true
        }
      })

    // ページ生成
    const range = process.env.pageRange
    const page = params.page ? params.page : 1
    const start = range * (page - 1)
    const last = range * page

    return {
      articles: articles.slice(start, last),
      hasPrev: start !== 0,
      hasNext: last < articles.length
    }
  }
}
