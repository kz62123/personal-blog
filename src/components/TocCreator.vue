<template>
  <div class="pb-toc-creator">
    <v-card flat tile>
      <v-card-title>
        - contents -
      </v-card-title>

      <v-card-text>
        <div v-for="(header, i) in headers" :key="i">
          <a class="pb-toc-creator__link" @click="$vuetify.goTo(header.id)">
            {{ header.text }}
          </a>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' }
  },

  computed: {
    headers() {
      const headers = []
      this.text.split(/\n|\r\n/).forEach((value, i) => {
        if (new RegExp(/^#{2,5} .*$/).test(value)) {
          headers.push({
            text: value.replace('## ', '').replace(/#/g, '　'),
            id: `#toc_${i}`
          })
        }
      })
      return headers
    }
  }
}
</script>

<style lang="scss">
.v-application {
  .pb-toc-creator {
    &__link {
      line-height: 250%;
      color: inherit;
    }
  }
}
</style>
