<template>
  <div data-aos="fade-left">
    <div class="card">
      <div class="card-content">
        <div class="has-text-centered pt-2">
          <a :href="technology.content.link.url" target="_blank">
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
          </a>
          <div class="has-text-weight-bold mt-1">
            {{ technology.content.name }}
          </div>
          <div class="px-3">
            <small>
              {{ technology.content.caption }}
            </small>
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
    }
  },
  methods: {
    imgResized(width) {
      return this.filename.replace(/%filter%/, width + 'x0')
    }
  }
}
</script>
