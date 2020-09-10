<template>
  <div>
    <index-profile />
    <section class="section">
      <div class="container">
        <div class="columns">
          <experiences class="column is-6" />
        </div>
      </div>
    </section>

    <index-technologies :technologies="technologies" />
    <index-portfolio :projects="stories" />
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  asyncData(context) {
    const stories = context.app.$storyapi.get(
      'cdn/stories?starts_with=projects/&per_page=8',
      {
        version: 'published'
      }
    )

    const technologies = context.app.$storyapi.get(
      'cdn/stories?starts_with=technologies/',
      {
        version: 'published'
      }
    )

    return Promise.all([stories, technologies])
      .then((r) => {
        return {
          stories: r[0].data.stories,
          technologies: r[1].data.stories
        }
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      stories: []
    }
  }
}
</script>
