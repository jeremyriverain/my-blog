<template>
  <div>
    {{ project.content.name }}
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
