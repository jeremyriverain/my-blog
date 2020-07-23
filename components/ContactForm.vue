<template>
  <div>
    <flash-message
      :show="message.show"
      :title="message.title"
      :body="message.body"
      :color="message.color"
    />
    <form
      ref="form"
      novalidate
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      @submit.prevent="onSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />

      <base-input
        v-model.trim="$v.form.firstName.$model"
        label="First name"
        :error="$v.form.firstName.$dirty && $v.form.firstName.$invalid"
        name="first-name"
      >
        <template #error>
          <div v-if="!$v.form.firstName.required" class="help is-danger">
            This field is required
          </div>
          <div v-if="!$v.form.firstName.maxLength" class="help is-danger">
            100 characters maximum
          </div>
        </template>
      </base-input>

      <base-input
        v-model.trim="$v.form.lastName.$model"
        label="Last name"
        name="last-name"
        :error="$v.form.lastName.$dirty && $v.form.lastName.$invalid"
      >
        <template #error>
          <div v-if="!$v.form.lastName.required" class="help is-danger">
            This field is required
          </div>
          <div v-if="!$v.form.lastName.maxLength" class="help is-danger">
            100 characters maximum
          </div>
        </template>
      </base-input>

      <base-input
        v-model.trim="$v.form.email.$model"
        label="Email"
        name="email"
        :error="$v.form.email.$dirty && $v.form.email.$invalid"
        inputmode="email"
      >
        <template #left-icon>
          <span class="icon is-left is-small">
            <span class="material-icons">
              mail_outline
            </span>
          </span>
        </template>
        <template #error>
          <div v-if="!$v.form.email.required" class="help is-danger">
            This field is required
          </div>
          <div v-if="!$v.form.email.email" class="help is-danger">
            This email is invalid
          </div>
          <div v-if="!$v.form.email.maxLength" class="help is-danger">
            150 characters maximum
          </div>
        </template>
      </base-input>

      <base-input
        v-model.trim="$v.form.phoneNumber.$model"
        label="Phone number"
        name="phone-number"
        :error="$v.form.phoneNumber.$dirty && $v.form.phoneNumber.$invalid"
        inputmode="tel"
      >
        <template #left-icon>
          <span class="icon is-left is-small">
            <span class="material-icons">
              smartphone
            </span>
          </span>
        </template>
        <template #error>
          <div v-if="!$v.form.phoneNumber.required" class="help is-danger">
            This field is required
          </div>
          <div v-if="!$v.form.phoneNumber.maxLength" class="help is-danger">
            150 characters maximum
          </div>
        </template>
      </base-input>

      <base-input
        v-model.trim="$v.form.message.$model"
        label="Message"
        name="message"
        type="textarea"
        :error="$v.form.message.$dirty && $v.form.message.$invalid"
      >
        <template #error>
          <div v-if="!$v.form.message.required" class="help is-danger">
            This field is required
          </div>
        </template>
      </base-input>

      <div class="field">
        <div class="control">
          <button class="button is-primary is-rounded" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, maxLength, email } from 'vuelidate/lib/validators'

import BaseInput from '~/components/BaseInput'
import FlashMessage from '~/components/FlashMessage'

export default {
  name: 'ContactForm',
  components: {
    BaseInput,
    FlashMessage
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      },
      message: {
        show: 0,
        title: '',
        body: '',
        color: 'is-success'
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    onSubmit() {
      console.log('on submit')
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('invalid')
      } else {
        console.log('valid')
        const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        const payload = this.encode({
          'form-name': 'contact',
          ...this.form
        })
        console.log('payload', payload)
        this.$axios
          .$post(process.env.BASE_URL + '/contact', payload, axiosConfig)
          .then((r) => {
            console.log(r)
            this.message.show++
            this.message.body =
              'Thanks for your message. I will answer you as soon as possible.'
          })
          .catch((e) => {
            console.log(e)
            alert('error' + JSON.stringify(e))
            this.message.show++
            this.message.body = 'An error occured'
            this.message.color = 'is-danger'
          })
      }
    }
  },
  validations: {
    form: {
      firstName: {
        required,
        maxLength: maxLength(100)
      },
      lastName: {
        required,
        maxLength: maxLength(100)
      },
      email: {
        required,
        email,
        maxLength: maxLength(150)
      },
      phoneNumber: {
        required,
        maxLength: maxLength(30)
      },
      message: {
        required
      }
    }
  }
}
</script>
