<template>
  <v-app-bar absolute app color="primary" dark>
    <v-spacer />

    <v-toolbar-title>
      <n-link class="white--text" to="/">
        {{ title }}
      </n-link>
    </v-toolbar-title>

    <v-spacer />

    <v-btn v-if="isDev" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      テーマ
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    title() {
      return process.env.title
    },

    isDev() {
      return process.env.NODE_ENV === 'development'
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
