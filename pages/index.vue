<template>
  <div>
    <IndexProfile />
    <section class="section">
      <div class="container">
        <div class="columns">
          <Experiences class="column is-6" />
        </div>
      </div>
    </section>
    <IndexWhyGeekco />
  </div>
</template>

<script>
import Experiences from '~/components/Experiences'
import IndexProfile from '~/components/IndexProfile'
import IndexWhyGeekco from '~/components/IndexWhyGeekco'
export default {
  name: 'PageIndex',
  components: {
    Experiences,
    IndexProfile,
    IndexWhyGeekco
  }
}
</script>

<style></style>
