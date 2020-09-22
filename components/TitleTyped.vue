<template>
  <vue-typed-js
    :back-speed="50"
    smart-backspace
    auto-insert-css
    content-type="html"
    :strings="strings"
  >
    <h1
      class="is-size-3 has-text-weight-bold mb-1 typing title-black-block"
      :class="$style.title"
    ></h1
  ></vue-typed-js>
</template>

<script>
export default {
  name: 'TitleTyped',
  props: {
    strings: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" module>
.title
  @media screen and (max-width: 550px)
    font-size: 1.6rem!important
</style>
