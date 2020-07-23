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
import ProjectItem from '~/components/ProjectItem'
export default {
  name: 'ProjectList',
  components: {
    ProjectItem
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
