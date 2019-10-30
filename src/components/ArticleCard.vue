<template>
  <div class="pb-article-card">
    <v-card tile>
      <n-link :to="`/articles/${path}/`">
        <v-img height="200px" :src="image" lazy-src="/icon.png">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary" />
            </v-row>
          </template>

          <client-only>
            <v-btn
              class="white--text"
              color="black"
              depressed
              small
              tile
              :to="`/search/category/${category}/`"
            >
              {{ category }}
            </v-btn>
          </client-only>
        </v-img>
      </n-link>

      <v-card-title class="align-end fill-height">
        <n-link :to="`/articles/${path}/`">
          {{ title }}
        </n-link>
      </v-card-title>

      <v-card-text>
        <div class="caption">
          <v-icon size="20">mdi-calendar</v-icon>
          {{ createdAt }}

          <v-icon size="20">mdi-update</v-icon>
          {{ updatedAt }}
        </div>

        <div class="my-1">
          <v-btn
            v-for="tag in tags"
            :key="tag"
            class="mr-1 my-1"
            color="primary"
            depressed
            tile
            x-small
            :to="`/search/tag/${tag}/`"
          >
            {{ tag }}
          </v-btn>
        </div>

        <n-link :to="`/articles/${path}/`">
          {{ description }}
        </n-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    base: { type: String, required: true },
    title: { type: String, default: undefined },
    description: { type: String, default: undefined },
    image: { type: String, default: undefined },
    category: { type: String, default: undefined },
    tags: { type: Array, default: () => [] },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },

  computed: {
    path() {
      const splitedBase = this.base.split(/_|\./)
      return `${splitedBase[0]}/${splitedBase[1]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.pb-article-card {
  :hover {
    animation: animation-opacity 0.2s ease-out forwards;
  }

  a {
    text-decoration: none;
  }
}

@keyframes animation-opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
