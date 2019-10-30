<template>
  <div>
    <div class="pb-4">
      <h2>{{ head.title }}</h2>
    </div>

    <pb-article-card-list
      :items="articles"
      :prev-url="prevUrl"
      :next-url="nextUrl"
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
  },

  computed: {
    prevUrl() {
      const { column, value, page } = this.$route.params
      return this.hasPrev
        ? `/search/${column}/${value}/${Number(page) - 1}/`
        : ''
    },

    nextUrl() {
      const { column, value, page } = this.$route.params
      return this.hasNext
        ? `/search/${column}/${value}/${Number(page) + 1}/`
        : ''
    }
  }
}
</script>
