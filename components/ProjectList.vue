<template>
  <div class="columns is-mobile" style="flex-wrap:wrap">
    <project-item
      v-for="project in projects"
      :key="project.id"
      :project="project"
      class="column is-3-desktop is-4-tablet is-12-mobile"
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
