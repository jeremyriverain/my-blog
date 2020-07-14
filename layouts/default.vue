<template>
  <div :class="$style.content">
    <TheHeader />
    <div :class="$style.body">
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

<style lang="sass" module>
.content
  display: flex
  flex-direction: column
  min-height: 100vh
  .body
    flex: 1 0 0%
</style>
