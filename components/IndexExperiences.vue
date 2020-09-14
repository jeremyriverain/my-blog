<template>
  <section class="section">
    <div class="container">
      <div class="columns" :class="$style.container">
        <div>
          <div class="has-background-dark px-3 py-3 has-text-white">
            <div class="is-size-5 has-text-weight-bold">
              /** My experience as a programmer */
            </div>
            <h2 class="is-size-3 has-text-weight-bold has-text-white">
              let
              <span class="has-text-primary">experience</span> = () => return [
            </h2>
          </div>
        </div>
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
