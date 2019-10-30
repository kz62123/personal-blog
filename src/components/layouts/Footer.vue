<template>
  <v-footer color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.label"
        class="my-2"
        color="white"
        rounded
        text
        target="_brank"
        :href="link.href"
        :to="link.to"
      >
        {{ link.label }}
      </v-btn>

      <v-col class="py-4 text-center white--text" cols="12">
        &copy; {{ new Date().getFullYear() }} - <strong>{{ title }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      title: process.env.title,

      links: [
        { label: 'ホーム', to: '/' },
        { label: 'このサイトについて', to: '/about/' },
        { label: 'プライバシーポリシー', to: '/policy/' },
        { label: '利用規約', to: '/terms/' },
        {
          label: 'お問い合わせ',
          href: '<https://Googleフォーム>'
        }
      ]
    }
  }
}
</script>
