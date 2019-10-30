<template>
  <div class="pb-side-links-card">
    <v-card tile>
      <v-card-title v-if="title">
        {{ title }}
      </v-card-title>

      <v-card-text>
        <div v-for="(num, label) in itemMap" :key="label">
          <n-link :to="`/search/${kind}/${label}/`">
            {{ `${label} (${num})` }}
          </n-link>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: undefined },
    itemMap: { type: Object, default: () => {} },
    kind: { type: String, default: undefined }
  }
}
</script>

<style lang="scss" scoped>
.pb-side-links-card {
  a {
    text-decoration: none;
  }
}
</style>
