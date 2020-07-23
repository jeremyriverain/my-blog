<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div
      class="control"
      :class="[
        error ? 'has-icons-right' : '',
        $slots['left-icon'] ? 'has-icons-left' : ''
      ]"
    >
      <input
        v-if="type !== 'textarea'"
        :value="value"
        class="input"
        :class="error ? 'is-danger' : ''"
        :type="type"
        :inputmode="inputmode"
        @input="$emit('input', $event.target.value)"
      />
      <textarea
        v-else
        :value="value"
        :class="error ? 'is-danger' : ''"
        class="textarea"
        @input="$emit('input', $event.target.value)"
      ></textarea>

      <slot name="left-icon" />
      <span v-if="error" class="icon is-right has-text-danger">
        <span class="material-icons">
          warning
        </span>
      </span>
    </div>

    <slot v-if="error" name="error" />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false
    },
    inputmode: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>
