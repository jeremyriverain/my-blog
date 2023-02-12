<script lang="ts" setup>
import nprogress from "nprogress";
import { reset } from "@formkit/core";

interface FormData {
  email: string;
  "form-name": "contact";
  message: string;
  name: string;
  phoneNumber: string;
  subject: string;
}

function encode(data: FormData) {
  return Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          data[key as keyof FormData]
        )}`
    )
    .join("&");
}

const hasSubmitSuccessfully = ref(false);
const hasErrorAfterSumitting = ref(false);

async function onSubmit(data: FormData) {
  const payload = encode(data);

  nprogress.start();
  hasErrorAfterSumitting.value = false;
  try {
    const config = useRuntimeConfig();
    const response = await $fetch(config.public.content.host + "/contact/", {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    hasSubmitSuccessfully.value = true;
    reset("form-contact");
    window.scrollTo(0, 0);
    console.log('response', response)
  } catch (error) {
    console.log(error);
    hasErrorAfterSumitting.value = true;
  } finally {
    nprogress.done();
  }
}
</script>
<template>
  <ProseBlockquote class="blockquote-error" v-if="hasErrorAfterSumitting"
    >An error occured. Please try again.</ProseBlockquote
  >
  <ProseBlockquote class="blockquote-success" v-if="hasSubmitSuccessfully"
    >Thank you. I will answer you as soon as possible.</ProseBlockquote
  >
  <div v-show="!hasSubmitSuccessfully">
    <FormKit
      type="form"
      id="form-contact"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit="onSubmit"
      submit-label="Send message"
    >
      <FormKit type="hidden" name="form-name" value="contact" />
      <FormKit
        type="text"
        name="name"
        id="name"
        label="Your name"
        validation="required"
        validation-visibility="dirty"
      />
      <FormKit
        type="email"
        name="email"
        id="email"
        label="Email"
        validation="required|email"
        validation-visibility="dirty"
      />

      <FormKit
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        label="Phone number"
        validation="required"
        validation-visibility="dirty"
      />

      <FormKit
        type="text"
        name="subject"
        id="subject"
        label="Subject"
        validation="required"
        validation-visibility="dirty"
      />

      <FormKit
        type="textarea"
        name="message"
        id="message"
        label="Message"
        validation="required"
        validation-visibility="dirty"
      />
    </FormKit>
  </div>
</template>
