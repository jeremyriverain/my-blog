<template>
  <div>
    <ExperiencesItem
      v-for="(experience, i) in experiences"
      :key="i"
      :experience="experience"
    />
  </div>
</template>

<script>
export default {
  name: 'Experiences',
  props: {
    experiences: {
      type: Array,
      default: () => []
    }
  }
}
</script>
