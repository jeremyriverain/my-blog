<template>
  <div>
    <div class="card" style="min-width:120px">
      <div class="card-content">
        <div class="has-text-centered pt-2">
          <component
            :is="hasLink ? 'a' : 'div'"
            :href="hasLink ? technology.content.link.url : false"
            :target="hasLink ? '_blank' : false"
            :rel="hasLink ? 'noopener' : false"
          >
            <img
              v-lazy="imgResized(100)"
              :data-srcset="
                imgResized(100) +
                  ' 100w, ' +
                  imgResized(200) +
                  ' 200, ' +
                  imgResized(300) +
                  ' 300w'
              "
              sizes="80px"
              width="80px"
              style="height:60px;width:auto"
              :alt="technology.content.image.alt"
            />
          </component>
          <div class="has-text-weight-bold mt-1">
            {{ technology.content.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexTechnologyItem',
  props: {
    technology: {
      type: Object,
      required: true
    }
  },
  computed: {
    filename() {
      return this.$options.filters.transformImage(this.technology.content.image)
    },
    hasLink() {
      return !!this.technology.content?.link?.url
    }
  },
  methods: {
    imgResized(width) {
      return this.filename.replace(/%filter%/, width + 'x0')
    }
  }
}
</script>
