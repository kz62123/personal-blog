<template>
  <pb-article-card-list
    :items="articles"
    :prev-url="hasPrev ? `/${Number($route.params.page) - 1}/` : ''"
    :next-url="hasNext ? `/${Number($route.params.page) + 1}/` : ''"
  />
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
