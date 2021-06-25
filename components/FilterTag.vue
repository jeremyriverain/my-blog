<template>
  <span
    class="tag"
    :class="[localColor, $style.tag]"
    data-cy="filter-tag"
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
  },
  data() {
    return {
      localColor: ''
    }
  },
  watch: {
    color: {
      immediate: false,
      handler: 'setLocalColor'
    }
  },
  created() {
    this.localColor = this.color
  },
  methods: {
    setLocalColor() {
      this.localColor = this.color + ' aos-init aos-animate'
    }
  }
}
</script>

<style lang="sass" module>
.tag.tag
  font-size: 0.9rem
</style>
