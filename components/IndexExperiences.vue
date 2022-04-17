<template>
  <section class="section">
    <div class="container">
      <div class="columns g-container">
        <homepage-subtitle subtitle="My experience as a programmer">
          const
          <span class="has-text-primary">experiences</span> = () =>
        </homepage-subtitle>

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
