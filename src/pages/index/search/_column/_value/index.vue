<template>
  <div>
    <div class="pb-4">
      <h2>{{ head.title }}</h2>
    </div>

    <pb-article-card-list
      :items="articles"
      :next-url="hasNext ? `${this.$route.path}2/` : ''"
    />
  </div>
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
        title: `${this.$route.params.value}の検索結果`
      }
    }
  }
}
</script>
