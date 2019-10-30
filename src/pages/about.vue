<template lang="md">
  ## このサイトについて
</template>

<script>
import HeadMixin from '~/mixins/HeadMixin'

export default {
  mixins: [HeadMixin],

  data() {
    return {
      head: {
        title: 'このサイトについて'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 24px;
}

h3 {
  margin-top: 16px;
}
</style>
