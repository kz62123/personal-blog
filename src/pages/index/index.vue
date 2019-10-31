<template>
  <pb-article-card-list :items="articles" :next-url="hasNext ? '/2/' : ''" />
</template>

<script>
import PbArticleCardList from '~/components/ArticleCardList'

import ArticleMixin from '~/mixins/ArticleMixin'
import HeadMixin from '~/mixins/HeadMixin'

export default {
  components: {
    PbArticleCardList
  },

  mixins: [ArticleMixin, HeadMixin],

  data() {
    return {
      head: {
        title: 'ホーム'
      }
    }
  }
}
</script>
