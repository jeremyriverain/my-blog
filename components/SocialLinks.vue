<template>
  <div :class="$style.links">
    <a :class="$style.link" href="https://github.com/jeremyriverain">
      <img
        :src="
          require('~/assets/images/github' + (light ? '-light' : '') + '.svg')
        "
        alt="github"
      />
    </a>
    <a :class="$style.link" href="https://twitter.com/jeremy_riverain">
      <img src="~/assets/images/twitter.svg" alt="twitter" />
    </a>
    <a
      :class="$style.link"
      href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-riverain-789462168/"
    >
      <img src="~/assets/images/linkedin.svg" alt="linkedin" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" module>
.links
    margin-top: 0.7rem
    .link + .link
        margin-left: 0.3rem
    .link img
        width: 22px
</style>
