<template>
  <div>
    <index-profile />
    <index-experiences
      :experiences="experiences"
      class="my-3"
      data-cy="experiences"
    />
    <index-technologies
      :technologies="technologies"
      class="my-3"
      data-cy="technologies"
    />
    <index-portfolio :projects="stories" class="my-3" />
    <div>lorem</div>
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

    const experiences = context.app.$storyapi.get(
      'cdn/stories?starts_with=jobs/',
      {
        version: 'published'
      }
    )

    return Promise.all([stories, technologies, experiences])
      .then((r) => {
        return {
          stories: r[0].data.stories,
          technologies: r[1].data.stories,
          experiences: r[2].data.stories
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
