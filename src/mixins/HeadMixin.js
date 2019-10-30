export default {
  head() {
    const url = `${process.env.baseUrl}${this.$route.path}`

    return {
      title: this.head.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.head.description
        },

        // OGP 設定
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: this.head.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.head.description
        },
        { hid: 'og:image', property: 'og:image', content: this.head.image }
      ],
      link: [{ rel: 'canonical', href: url }]
    }
  }
}
