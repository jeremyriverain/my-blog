<template>
  <span class="tag" :class="color" @click="$emit('click')"><slot /></span>
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
