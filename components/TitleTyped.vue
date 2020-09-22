<template>
  <div>
    <vue-typed-js
      :back-speed="50"
      smart-backspace
      auto-insert-css
      content-type="html"
      cursor-char=" "
      strings-element="#typed-strings"
    >
      <h1
        class="is-size-3 has-text-weight-bold mb-1 typing title-black-block"
        :class="$style.title"
      ></h1
    ></vue-typed-js>

    <h1
      id="typed-strings"
      class="is-size-3 has-text-weight-bold mb-1 title-black-block is-invisible"
    >
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TitleTyped'
}
</script>

<style lang="sass" module>
.title
  letter-spacing: 0.08rem
  min-height: 48px
  @media screen and (max-width: 550px)
    min-height: 38px
    font-size: 1.6rem!important
</style>
