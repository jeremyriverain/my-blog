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

    <index-portfolio :projects="stories" />
    <index-why-geekco />
  </div>
</template>

<script>
import Experiences from '~/components/Experiences'
import IndexPortfolio from '~/components/IndexPortfolio'
import IndexProfile from '~/components/IndexProfile'
import IndexWhyGeekco from '~/components/IndexWhyGeekco'
export default {
  name: 'PageIndex',
  components: {
    Experiences,
    IndexPortfolio,
    IndexProfile,
    IndexWhyGeekco
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories?starts_with=projects/&per_page=4', {
        version: 'published'
      })
      .then((res) => {
        return res.data
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

<style></style>
