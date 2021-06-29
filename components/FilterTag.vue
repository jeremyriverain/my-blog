<template>
  <span
    class="tag g-tag"
    :class="[localColor]"
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
      this.localColor = this.color
    }
  }
}
</script>

<style lang="sass" scoped>
.tag.g-tag
  font-size: 0.9rem
</style>
