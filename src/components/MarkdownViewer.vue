<template>
  <div class="pb-markdown-viewer">
    <!--eslint-disable-next-line-->
    <div class="line-numbers" v-html="$md.render(namedContent)" />
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default {
  props: {
    content: { type: String, default: undefined }
  },

  computed: {
    namedContent() {
      return this.content
        .split(/\n|\r\n/)
        .map((value, i) => {
          if (new RegExp(/^#{2,5} .*$/).test(value)) {
            return `${value} {#toc_${i}}`
          }
          return value
        })
        .join('\n')
    }
  },

  mounted() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss">
.v-application {
  .pb-markdown-viewer {
    h2 {
      position: relative;
      color: #ffffff;
      padding: 0.1em 0.1em 0.1em 1.2em;
      background-color: #fb8c00;
      border-radius: 0.1em;
      margin: 20px 0;

      &::after {
        position: absolute;
        top: 50%;
        left: 0.4em;
        transform: translateY(-50%);
        content: '';
        width: 5px;
        height: 70%;
        background-color: #ffffff;
      }
    }

    h3 {
      position: relative;
      border-bottom: 4px solid #dddddd;
      margin: 15px 0;

      &::after {
        position: absolute;
        content: ' ';
        border-bottom: solid 4px #fb8c00;
        width: 20%;
        display: block;
      }
    }

    h4 {
      position: relative;
      padding-left: 1em;
      margin: 10px 0;

      &::after {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        content: '';
        width: 10px;
        height: 10px;
        background-color: #fb8c00;
      }
    }

    pre {
      border-radius: 0;

      code {
        &::before,
        &::after {
          content: '';
        }
      }

      code[data-filename] {
        margin-top: 20px;
        &::before {
          content: attr(data-filename);
          position: absolute;
          top: -36px;
          left: -61px;
          padding: 2px 5px;
          color: #f8f8f2;
          background-color: #878787;
        }
      }
    }

    code {
      font-size: 85%;
      font-weight: 300;
      color: #f8f8f2;
      background-color: #272822;
      box-shadow: none;
    }

    blockquote {
      position: relative;
      padding: 10px 15px 10px 40px;
      box-sizing: border-box;
      background: #dddddd;
      color: #555555;
      border-left: 4px solid #fb8c00;

      &::before {
        display: inline-block;
        position: absolute;
        top: 8px;
        left: 8px;
        content: '“';
        font-family: sans-serif;
        color: #fb8c00;
        font-size: 60px;
        line-height: 1;
      }

      p {
        padding: 0;
        margin: 7px 0;
        line-height: 1.7;
      }

      cite {
        display: block;
        text-align: right;
        color: #777777;
        font-size: 0.9em;

        &::before {
          content: '引用元: ';
          font-style: normal;
        }
      }
    }
  }
}
</style>
