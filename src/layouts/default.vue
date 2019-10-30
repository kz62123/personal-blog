<template>
  <v-app>
    <pb-toolbar />

    <v-content class="main-content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <pb-footer />
  </v-app>
</template>

<script>
import PbFooter from '~/components/layouts/Footer'
import PbToolbar from '~/components/layouts/Toolbar'

export default {
  components: {
    PbFooter,
    PbToolbar
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  .container {
    max-width: 1200px;
  }
}
</style>
