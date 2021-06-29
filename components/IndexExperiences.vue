<template>
  <section class="section">
    <div class="container">
      <div class="columns g-container">
        <geek-title subtitle="My experience as a programmer">
          let
          <span class="has-text-primary">experiences</span> = () =>
        </geek-title>

        <experiences class="column is-6" :experiences="experiences" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexExperiences',
  props: {
    experiences: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="sass" scoped>
.g-container
  @media screen and (max-width:1215px)
    display: block!important
</style>
