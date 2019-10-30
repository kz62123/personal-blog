<template>
  <pb-article-card-list :items="articles" :next-url="hasNext ? '/2/' : ''" />
</template>

<script>
import PbArticleCardList from '~/components/ArticleCardList'

import ArticleMixin from '~/mixins/ArticleMixin'

export default {
  components: {
    PbArticleCardList
  },

  mixins: [ArticleMixin],

  head() {
    return {
      title: process.env.title,
      titleTemplate: ''
    }
  }
}
</script>
