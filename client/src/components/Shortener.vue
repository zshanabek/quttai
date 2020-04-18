<template>
  <div>
    <div class="my-auto ">
      <main
        role="main"
        class="inner cover"
      >
        <h1 class="cover-heading">Shorten your url.</h1>
        <form @submit="onSubmit">
          <input
            type="text"
            class="form-control mb-3"
            placeholder="write url"
            v-model="url"
          >
          <button
            type="submit"
            class="btn btn-outline-light"
          >Hit it!</button>
        </form>
        <input
          class="form-control mt-3"
          type="text"
          v-model="message.url"
          readonly
        >
        <button
          class="btn btn-outline-light mt-3"
          type="button"
          v-clipboard:copy="message.url"
        >Copy!</button>

      </main>

    </div>

  </div>
</template>

<script>
import { post } from 'axios'
var validUrl = require('valid-url')

export default {
  data () {
    return {
      url: '',
      message: '',
      showMessage: false,
      action: {
        text: 'Cancel',
        onClick: (e, toastObject) => {
          toastObject.goAway(0)
        }
      }
    }
  },
  methods: {
    async addURL () {
      const path = 'http://localhost:5000/api/items'
      const object = { url: this.url }
      this.message = (await post(path, object)).data
    },
    initForm () {
      this.url = ''
      this.message = ''
    },
    onSubmit (evt) {
      evt.preventDefault()
      if (validUrl.isUri(this.url)) {
        this.addURL()
        this.initForm()
      } else {
        this.$toasted.show('Not an URI')
      }
    }
  }
}
</script>
