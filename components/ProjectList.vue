<template>
  <transition-group
    name="list-complete"
    tag="div"
    class="columns is-mobile"
    :class="$style.container"
    style="flex-wrap:wrap"
  >
    <project-item
      v-for="project in projects"
      :key="project.id"
      :project="project"
      class="column is-3-desktop is-4-tablet is-6-mobile list-complete-item "
      :class="$style.item"
    />
  </transition-group>
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

<style scoped>
.list-complete-item {
  transition: all 0.5s;
  /* display: inline-block;
  margin-right: 10px; */
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

<style lang="sass" module>
@media screen and (max-width:500px)
  .container
    display: block !important
    .item
      width: 100% !important
</style>
