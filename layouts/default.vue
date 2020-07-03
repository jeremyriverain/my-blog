<template>
  <div>
    <the-header />
    <transition name="page" mode="out-in" appear>
      <nuxt />
    </transition>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>
