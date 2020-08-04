<template>
  <div class="message is-primary">
    <div class="message-header">
      Resources
    </div>
    <div class="message-body has-text-black">
      <ul>
        <li v-for="resource in resources" :key="resource._uid">
          <a :href="resource.value.url" target="_blank">{{ resource.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resources: {
      type: Array,
      required: true
    }
  }
}
</script>
