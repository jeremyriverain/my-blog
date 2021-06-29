<template>
  <div class="g-content">
    <TheHeader />
    <div class="g-body">
      <transition name="page" mode="out-in" appear>
        <nuxt />
      </transition>
    </div>

    <TheFooter class="mt-5" />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style lang="sass" scoped>
.g-content
  display: flex
  flex-direction: column
  min-height: 100vh
  max-width: 100vw
  .g-body
    max-width: 100vw
    flex: 1 0 0%
</style>
