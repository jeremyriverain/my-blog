<template>
  <div class="g-links">
    <a class="g-link" href="https://github.com/jeremyriverain">
      <img
        :src="
          require('~/assets/images/github' + (light ? '-light' : '') + '.svg')
        "
        alt="github"
        width="22"
        height="22"
      />
    </a>
    <a class="g-link" href="https://twitter.com/jeremy_riverain">
      <img
        src="~/assets/images/twitter.svg"
        alt="twitter"
        width="22"
        height="22"
      />
    </a>
    <a
      class="g-link"
      href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-riverain-789462168/"
    >
      <img
        src="~/assets/images/linkedin.svg"
        alt="linkedin"
        width="22"
        height="22"
      />
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

<style lang="sass" scoped>
.g-links
    margin-top: 0.7rem
    .g-link + .g-link
        margin-left: 0.3rem
    .g-link img
        width: 22px
</style>
