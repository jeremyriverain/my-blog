<template>
  <span
    class="tag"
    :class="[color, $style.tag]"
    data-aos="fade-left"
    @click="$emit('click')"
    ><slot
  /></span>
</template>

<script>
export default {
  name: 'FilterTag',
  props: {
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" module>
.tag.tag
  font-size: 0.9rem
</style>
