<template>
  <v-row>
    <v-col md="4" order-md="last">
      <pb-toc-creator
        :class="$vuetify.breakpoint.mdAndUp ? 'sticky' : ''"
        :text="article.bodyContent"
      />
    </v-col>

    <v-col md="8">
      <v-sheet :class="$vuetify.breakpoint.mdAndUp ? 'pa-8' : 'pa-2'" flat tile>
        <v-breadcrumbs class="pa-0" :items="breadcrumbs" divider=">" />

        <h1 class="my-4 display-1 font-weight-bold">
          {{ article.title }}
        </h1>

        <div class="my-4 caption">
          <v-icon size="20">mdi-calendar</v-icon>
          {{ article.created_at }}

          <v-icon size="20">mdi-update</v-icon>
          {{ article.updated_at }}
        </div>

        <div class="my-4">
          <v-btn
            v-for="tag in article.tags"
            :key="tag"
            class="mr-2 my-1"
            color="primary"
            depressed
            tile
            small
            :to="`/search/tag/${tag}/`"
          >
            {{ tag }}
          </v-btn>
        </div>

        <v-divider class="my-8" />

        <pb-markdown-viewer class="my-8" :content="article.bodyContent" />

        <pb-share-btns :title="article.title" :hashtags="article.tags" />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { sourceFileArray } from '~/contents/summary.json'

import PbMarkdownViewer from '~/components/MarkdownViewer'
import PbShareBtns from '~/components/ShareBtns'
import PbTocCreator from '~/components/TocCreator'

import HeadMixin from '~/mixins/HeadMixin'

export default {
  components: {
    PbMarkdownViewer,
    PbShareBtns,
    PbTocCreator
  },

  mixins: [HeadMixin],

  validate({ params }) {
    return sourceFileArray.includes(
      `src/contents/markdown/${params.date}_${params.slug}.md`
    )
  },

  computed: {
    breadcrumbs() {
      return [
        { text: 'ホーム', to: '/' },
        {
          text: this.article.category,
          to: `/search/category/${this.article.category}/`
        },
        { text: this.article.title, disabled: true }
      ]
    }
  },

  asyncData({ params }) {
    const article = require(`~/contents/json/${params.date}_${params.slug}.json`)
    const head = {
      title: article.title,
      description: article.description || article.preview,
      image: `${process.env.baseUrl}${article.image}`
    }
    return { article, head }
  }
}
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 20px;
  height: 90vh;
  overflow-y: scroll;
}
</style>
