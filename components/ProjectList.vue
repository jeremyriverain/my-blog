<template>
  <div>
    <project-item
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
