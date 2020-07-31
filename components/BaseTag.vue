<template>
  <span class="tag" :class="colorClass">{{ label }}</span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    colorClass: {
      type: String,
      default: ''
    }
  }
}
</script>
