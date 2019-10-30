<template>
  <v-row>
    <v-col md="8">
      <nuxt-child />
    </v-col>

    <v-col md="4">
      <pb-side-links-card
        class="pb-4"
        title="カテゴリ一覧"
        :item-map="categoryMap"
        kind="category"
      />

      <pb-side-links-card
        class="pb-4"
        title="タグ一覧"
        :item-map="tagMap"
        kind="tag"
      />
    </v-col>
  </v-row>
</template>

<script>
import PbSideLinksCard from '~/components/SideLinksCard'

export default {
  components: {
    PbSideLinksCard
  },

  async asyncData() {
    const { fileMap } = await import('~/contents/summary.json')

    const categoryMap = {}
    const tagMap = {}
    Object.values(fileMap).forEach((value) => {
      // カテゴリ一覧生成
      if (categoryMap[value.category]) {
        categoryMap[value.category]++
      } else {
        categoryMap[value.category] = 1
      }

      // タグ一覧生成
      value.tags.forEach((tag) => {
        if (tagMap[tag]) {
          tagMap[tag]++
        } else {
          tagMap[tag] = 1
        }
      })
    })

    return { categoryMap, tagMap }
  }
}
</script>
