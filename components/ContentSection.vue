<template>
  <div
    :class="$style.content"
    class="has-text-justified content"
    v-html="content"
  />
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    content: {
      type: String
    }
  }
}
</script>

<style lang="sass" module>
.content
  a
    text-decoration: underline
  p
    margin-top: $size-normal
    margin-bottom: $size-normal
  h3, h4, h5
    font-weight: bold
    text-align: left
  h3
    margin-top: $size-3
    font-size: $size-3
    line-height: 1.2
  h4
    margin-top: $size-large
    font-size: $size-5
  h5
    margin-top: $size-large
    font-size: $size-6
  pre
    padding: 0
    margin-top: $size-normal
    margin-bottom: $size-normal
  ul
    padding-left: 1rem
    margin-top: $size-normal
    margin-bottom: $size-normal
    li
      list-style-type: square
  blockquote
    & > *
      margin: 0
</style>
