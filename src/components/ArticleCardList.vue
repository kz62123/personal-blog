<template>
  <div class="pb-article-card-list">
    <v-row no-gutters>
      <v-col v-for="(item, i) in items" :key="i" class="pb-4" cols="12">
        <pb-article-card
          :base="item.base"
          :title="item.title"
          :description="item.description || item.preview"
          :image="item.image"
          :category="item.category"
          :tags="item.tags"
          :created-at="item.created_at"
          :updated-at="item.updated_at"
        />
      </v-col>

      <v-col cols="12">
        <v-row no-gutters>
          <v-col>
            <v-btn v-if="prevUrl" color="primary" tile :to="prevUrl">
              prev
            </v-btn>
          </v-col>

          <v-col class="text-right">
            <v-btn v-if="nextUrl" color="primary" tile :to="nextUrl">
              next
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PbArticleCard from '~/components/ArticleCard'

export default {
  components: {
    PbArticleCard
  },

  props: {
    items: { type: Array, default: () => [] },
    prevUrl: { type: String, default: undefined },
    nextUrl: { type: String, default: undefined }
  }
}
</script>
