<template>
  <section class="section">
    <div class="container">
      <div class="columns" :class="$style.container">
        <geek-title subtitle="My experience as a programmer">
          let
          <span class="has-text-primary">experiences</span> = () => return [
        </geek-title>

        <experiences class="column is-6" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexExperiences'
}
</script>
<style lang="sass" module>
.container
  @media screen and (max-width:1215px)
    display: block!important
</style>
