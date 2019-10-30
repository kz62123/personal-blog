<template>
  <v-row dense>
    <v-col>
      <v-btn
        class="white--text"
        :href="twitterShareUrl"
        rel="nofollow"
        target="_blank"
        color="#1DA1F2"
        tile
        width="80"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>

      <v-btn
        class="white--text"
        :href="facebookShareUrl"
        rel="nofollow"
        target="_blank"
        color="#3C5A99"
        tile
        width="80"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn
        class="white--text"
        :href="hatenaShareUrl"
        rel="nofollow"
        target="_blank"
        color="#5279E7"
        tile
        width="80"
      >
        <span class="headline font-weight-bold">
          B!
        </span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    hashtags: { type: Array, default: () => [] }
  },

  computed: {
    currentUrl() {
      return encodeURIComponent(process.env.baseUrl + this.$route.path)
    },

    twitterShareUrl() {
      return (
        'https://twitter.com/share?' +
        `url=${this.currentUrl}&` +
        `hashtags=${this.hashtags.join(',')}&` +
        `text=${this.title}`
      )
    },

    facebookShareUrl() {
      return `http://www.facebook.com/share.php?u=${this.currentUrl}`
    },

    hatenaShareUrl() {
      return `http://b.hatena.ne.jp/add?mode=confirm&url=${this.currentUrl}&title=${this.title}`
    }
  }
}
</script>
