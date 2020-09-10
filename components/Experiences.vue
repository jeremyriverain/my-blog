<template>
  <div>
    <h2 class="is-size-4 has-text-weight-bold mb-4">Experience</h2>
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
  data() {
    return {
      experiences: [
        {
          jobName: 'Fullstack Developer',
          company: 'Sentinelles du web',
          image: 'sdw.png',
          date: 'Since August 2018',
          location: 'Douarnenez - France'
        },
        {
          jobName: 'Freelance Developer',
          date: 'May 2016 - August 2018 - 2 years 3 months',
          location: 'Reunion Island and Quimper - France'
        }
      ]
    }
  }
}
</script>
